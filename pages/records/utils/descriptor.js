// https://github.com/yiminghe/async-validator

export const createDescriptor = function(ruleStr) {
  const ruleResult = [];
  const rules = paresRuleString(ruleStr);
  const { max, min, required, type } = rules;
  if (required) {
    ruleResult.push({
      required: true,
      message: "必填项，请填写"
    });
  }
  if (type != null) {
    ruleResult.push(handleType(type));
  }
  if (max != null || min != null) {
    ruleResult.push(handleRange(type, min, max));
  }
  return ruleResult;
};

/**
 * 解析规则字符串，如：required|number|max:100|min:0
 * @param {*} string
 * @returns {Object} 返回规则键值对
 */
function paresRuleString(string) {
  let result = {};
  string.split("|").forEach(i => {
    const { key, value } = formatRuleItem(i);
    result[key] = value;
  });
  return result;
}

/**
 * 将规则转换为对象
 * @param {String} rule
 */
function formatRuleItem(rule) {
  let value = "";
  if (rule.includes(":")) {
    [rule, value] = rule.split(":");
  }
  switch (rule) {
    case "required":
      return {
        key: "required",
        value: true
      };
    case "string":
      return {
        key: "type",
        value: "string"
      };
    case "number":
      return {
        key: "type",
        value: "number"
      };
    case "array":
      return {
        key: "type",
        value: "array"
      };
    case "max":
      return {
        key: "max",
        value: value
      };
    case "min":
      return {
        key: "min",
        value: value
      };
  }
}

function handleRange(type = "string", min, max) {
  let result = { type };
  if (min >= 0 && max == null) {
    result.message = `长度请大于${min}`;
    result.min = +min;
    return result;
  }
  if (max >= 0 && min == null) {
    result.message = `长度请小于${max}`;
    result.max = +max;
    return result;
  }
  result.min = +min;
  result.max = +max;
  result.message = `长度请在${min}~${max}之间`;
  return result;
}

function handleType(type) {
  const result = { type };
  if (type === "array") {
    return result;
  }
  if (type === "number") {
    result.message = "请填写数字类型";
    return result;
  }
}
