import { jsonc } from 'jsonc';
import { readFileSync } from 'fs';
import logSymbols from 'log-symbols';

export default () => {
	return jsonc.parse(readFileSync(`${__dirname}/../../config.jsonc`).toString())
}
