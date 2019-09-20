import schema, { group } from "./schema";
import parse from "./parse";
import validate from "./validate";
import mapValues from "./mapValues";
import { isSchema } from "./utils";

module.exports = schema;
module.exports.isSchema = isSchema;
module.exports.group = group;
module.exports.parse = parse;
module.exports.validate = validate;
module.exports.mapValues = mapValues;
