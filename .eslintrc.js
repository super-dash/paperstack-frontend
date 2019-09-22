module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"google",
		"eslint:recommended"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		'no-multi-spaces': 1,
		'no-redeclare': 1, // disallow declaring the same variable more then once
		'brace-style': 1, // enforce one true brace style
		'camelcase': 1, // require camel case names
		'new-cap': 1, // require a capital letter for constructors
		'arrow-parens': ["error", "as-needed"], // 在箭头函数可以省略括号的地方强制不使用括号
		'no-duplicate-imports': 2, // 禁止重复模块导入
		'no-var': 2,
		'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
		'prefer-const': 2,
		'prefer-rest-params': 1, // 要求使用剩余参数而不是 arguments
		"indent": ["warn", 2],
		"no-trailing-spaces": "warn",
		"quotes": ["warn", "single"],
		"jsx-quotes": ["warn", "prefer-double"],
		"eol-last": ["warn", "always"],
		"semi": ["warn", "always"]
	}
};