module.exports = {
    "extends": "react-app",
    "rules": {
        "no-console": 1,
        "no-extra-semi": 1,
        // "no-case-declarations": 1,
        "no-unused-vars": 1,
        "no-undef": 1,
        "no-delete-var": 1,

        // "indent": ["warn", "tab"],

        // best (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js)
        // enforces getter/setter pairs in objects
        'accessor-pairs': 'off',

        // treat var statements as if they were block scoped
        'block-scoped-var': 'error',

        // specify the maximum cyclomatic complexity allowed in a program
        complexity: ['off', 11],

        // enforce that class methods use "this"
        // https://eslint.org/docs/rules/class-methods-use-this
        // 'class-methods-use-this': 1,

        // require return statements to either always or never specify values
        'consistent-return': 1,

        // specify curly brace conventions for all control statements
        curly: ['error', 'multi-line'],

        // require default case in switch statements
        'default-case': ['error', { commentPattern: '^no default$' }],

        // encourages use of dot notation whenever possible
        'dot-notation': ['error', { allowKeywords: true }],

        // enforces consistent newlines before or after dots
        // https://eslint.org/docs/rules/dot-location
        'dot-location': ['error', 'property'],

        // require the use of === and !==
        // https://eslint.org/docs/rules/eqeqeq
        eqeqeq: ['error', 'always', { null: 'ignore' }],

        // make sure for-in loops have an if statement
        'guard-for-in': 'error',

        // enforce a maximum number of classes per file
        // https://eslint.org/docs/rules/max-classes-per-file
        // TODO: semver-major (eslint 5): enable
        'max-classes-per-file': ['off', 1],

        // disallow the use of alert, confirm, and prompt
        'no-alert': 'warn',

        // disallow use of arguments.caller or arguments.callee
        'no-caller': 'error',

        // disallow lexical declarations in case/default clauses
        // https://eslint.org/docs/rules/no-case-declarations.html
        // 'no-case-declarations': 'error',

        // disallow division operators explicitly at beginning of regular expression
        // https://eslint.org/docs/rules/no-div-regex
        'no-div-regex': 'off',

        // disallow else after a return in an if
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': 1,

        // disallow empty functions, except for standalone funcs/arrows
        // https://eslint.org/docs/rules/no-empty-function
        'no-empty-function': ['error', {
            allow: [
                'arrowFunctions',
                'functions',
                'methods',
            ]
        }],

        // disallow empty destructuring patterns
        // https://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 'error',

        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 'off',

        // disallow use of eval()
        'no-eval': 'error',

        // disallow adding to native types
        'no-extend-native': 'error',

        // disallow unnecessary function binding
        'no-extra-bind': 'error',

        // disallow Unnecessary Labels
        // https://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 'error',

        // disallow fallthrough of case statements
        'no-fallthrough': 'error',

        // disallow the use of leading or trailing decimal points in numeric literals
        'no-floating-decimal': 'error',

        // disallow reassignments of native objects or read-only globals
        // https://eslint.org/docs/rules/no-global-assign
        'no-global-assign': ['error', { exceptions: [] }],
        // deprecated in favor of no-global-assign
        'no-native-reassign': 'off',

        // disallow implicit type conversions
        // https://eslint.org/docs/rules/no-implicit-coercion
        'no-implicit-coercion': ['off', {
            boolean: false,
            number: true,
            string: true,
            allow: [],
        }],

        // disallow var and named functions in global scope
        // https://eslint.org/docs/rules/no-implicit-globals
        'no-implicit-globals': 'off',

        // disallow use of eval()-like methods
        'no-implied-eval': 'error',

        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow usage of __iterator__ property
        'no-iterator': 'error',

        // disallow use of labels for anything other then loops and switches
        'no-labels': 1,

        // disallow unnecessary nested blocks
        'no-lone-blocks': 'error',

        // disallow creation of functions within loops
        'no-loop-func': 'error',

        // disallow magic numbers
        // https://eslint.org/docs/rules/no-magic-numbers
        'no-magic-numbers': ['off', {
            ignore: [],
            ignoreArrayIndexes: true,
            enforceConst: true,
            detectObjects: false,
        }],

        // disallow use of multiple spaces
        'no-multi-spaces': ['error', {
            ignoreEOLComments: false,
        }],

        // disallow use of multiline strings
        'no-multi-str': 'error',

        // disallow use of new operator when not part of the assignment or comparison
        'no-new': 'error',

        // disallow use of new operator for Function object
        'no-new-func': 'error',

        // disallows creating new instances of String, Number, and Boolean
        'no-new-wrappers': 'error',

        // disallow use of (old style) octal literals
        'no-octal': 'error',

        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        'no-octal-escape': 'error',

        // disallow reassignment of function parameters
        // disallow parameter object manipulation except for specific exclusions
        // rule: https://eslint.org/docs/rules/no-param-reassign.html
        'no-param-reassign': 1,

        // disallow usage of __proto__ property
        'no-proto': 'error',

        // disallow declaring the same variable more then once
        'no-redeclare': 'error',

        // disallow certain object properties
        // https://eslint.org/docs/rules/no-restricted-properties
        'no-restricted-properties': ['error', {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated',
        }, {
                object: 'global',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'self',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'window',
                property: 'isFinite',
                message: 'Please use Number.isFinite instead',
            }, {
                object: 'global',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'self',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                object: 'window',
                property: 'isNaN',
                message: 'Please use Number.isNaN instead',
            }, {
                property: '__defineGetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                property: '__defineSetter__',
                message: 'Please use Object.defineProperty instead.',
            }, {
                object: 'Math',
                property: 'pow',
                message: 'Use the exponentiation operator (**) instead.',
            }],

        // disallow use of assignment in return statement
        'no-return-assign': 1,

        // disallow redundant `return await`
        'no-return-await': 'error',

        // disallow use of `javascript:` urls.
        'no-script-url': 'error',

        // disallow self assignment
        // https://eslint.org/docs/rules/no-self-assign
        // TODO: semver-major: props -> true
        'no-self-assign': ['error', {
            props: false,
        }],

        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 'error',

        // disallow use of comma operator
        'no-sequences': 'error',

        // restrict what can be thrown as an exception
        'no-throw-literal': 'error',

        // disallow unmodified conditions of loops
        // https://eslint.org/docs/rules/no-unmodified-loop-condition
        'no-unmodified-loop-condition': 'off',

        // disallow usage of expressions in statement position
        'no-unused-expressions': 1,

        // disallow unused labels
        // https://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 'error',

        // disallow unnecessary .call() and .apply()
        'no-useless-call': 'off',

        // Disallow unnecessary catch clauses
        // https://eslint.org/docs/rules/no-useless-catch
        // TODO: enable, semver-major
        'no-useless-catch': 'off',

        // disallow useless string concatenation
        // https://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 'error',

        // disallow unnecessary string escaping
        // https://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 'error',

        // disallow redundant return; keywords
        // https://eslint.org/docs/rules/no-useless-return
        'no-useless-return': 'error',

        // disallow use of void operator
        // https://eslint.org/docs/rules/no-void
        'no-void': 'error',

        // disallow usage of configurable warning terms in comments: e.g. todo
        'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

        // disallow use of the with statement
        'no-with': 'error',

        // require using Error objects as Promise rejection reasons
        // https://eslint.org/docs/rules/prefer-promise-reject-errors
        'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

        // Suggest using named capture group in regular expression
        // https://eslint.org/docs/rules/prefer-named-capture-group
        'prefer-named-capture-group': 'off',

        // require use of the second argument for parseInt()
        radix: 'error',

        // require `await` in `async function` (note: this is a horrible rule that should never be used)
        // https://eslint.org/docs/rules/require-await
        'require-await': 'off',

        // Enforce the use of u flag on RegExp
        // https://eslint.org/docs/rules/require-unicode-regexp
        'require-unicode-regexp': 'off',

        // requires to declare all vars on top of their containing scope
        'vars-on-top': 'error',

        // require immediate function invocation to be wrapped in parentheses
        // https://eslint.org/docs/rules/wrap-iife.html
        'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

        // require or disallow Yoda conditions
        yoda: 'error',

        // Enforce “for” loop update clause moving the counter in the right direction
        // https://eslint.org/docs/rules/for-direction
        'for-direction': 'error',

        // Enforces that a return statement is present in property getters
        // https://eslint.org/docs/rules/getter-return
        'getter-return': ['error', { allowImplicit: true }],

        // disallow using an async function as a Promise executor
        // https://eslint.org/docs/rules/no-async-promise-executor
        // TODO: enable, semver-major
        'no-async-promise-executor': 'off',

        // Disallow await inside of loops
        // https://eslint.org/docs/rules/no-await-in-loop
        'no-await-in-loop': 'error',

        // Disallow comparisons to negative zero
        // https://eslint.org/docs/rules/no-compare-neg-zero
        'no-compare-neg-zero': 'error',

        // disallow assignment in conditional expressions
        'no-cond-assign': ['error', 'always'],

        // disallow use of console
        'no-console': 'warn',

        // disallow use of constant expressions in conditions
        'no-constant-condition': 'warn',

        // disallow control characters in regular expressions
        'no-control-regex': 'error',

        // disallow use of debugger
        'no-debugger': 'error',

        // disallow duplicate arguments in functions
        'no-dupe-args': 'error',

        // disallow duplicate keys when creating object literals
        'no-dupe-keys': 'error',

        // disallow a duplicate case label.
        'no-duplicate-case': 'error',

        // disallow empty statements
        'no-empty': 'error',

        // disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 'error',

        // disallow assigning to the exception in a catch block
        'no-ex-assign': 'error',

        // disallow double-negation boolean casts in a boolean context
        // https://eslint.org/docs/rules/no-extra-boolean-cast
        'no-extra-boolean-cast': 1,

        // disallow unnecessary parentheses
        // https://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': ['off', 'all', {
            conditionalAssign: true,
            nestedBinaryExpressions: false,
            returnAssign: false,
            ignoreJSX: 'all', // delegate to eslint-plugin-react
            enforceForArrowConditionals: false,
        }],

        // disallow unnecessary semicolons
        // 'no-extra-semi': 'error',

        // disallow overwriting functions written as function declarations
        'no-func-assign': 'error',

        // disallow function or variable declarations in nested blocks
        'no-inner-declarations': 'error',

        // disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 'error',

        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'error',

        // Disallow characters which are made with multiple code points in character class syntax
        // https://eslint.org/docs/rules/no-misleading-character-class
        // TODO: enable, semver-major
        'no-misleading-character-class': 'off',

        // disallow the use of object properties of the global object (Math and JSON) as functions
        'no-obj-calls': 'error',

        // disallow use of Object.prototypes builtins directly
        // https://eslint.org/docs/rules/no-prototype-builtins
        'no-prototype-builtins': 'error',

        // disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 'error',

        // disallow sparse arrays
        'no-sparse-arrays': 'error',

        // Disallow template literal placeholder syntax in regular strings
        // https://eslint.org/docs/rules/no-template-curly-in-string
        'no-template-curly-in-string': 'error',

        // Avoid code that looks like two expressions but is actually one
        // https://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 'error',

        // disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 'error',

        // disallow return/throw/break/continue inside finally blocks
        // https://eslint.org/docs/rules/no-unsafe-finally
        'no-unsafe-finally': 'error',

        // disallow negating the left operand of relational operators
        // https://eslint.org/docs/rules/no-unsafe-negation
        'no-unsafe-negation': 'error',
        // disallow negation of the left operand of an in expression
        // deprecated in favor of no-unsafe-negation
        'no-negated-in-lhs': 'off',

        // Disallow assignments that can lead to race conditions due to usage of await or yield
        // https://eslint.org/docs/rules/require-atomic-updates
        // TODO: enable, semver-major
        'require-atomic-updates': 'off',

        // disallow comparisons with the value NaN
        'use-isnan': 'error',

        // ensure JSDoc comments are valid
        // https://eslint.org/docs/rules/valid-jsdoc
        'valid-jsdoc': 'off',

        // ensure that the results of typeof are compared against a valid string
        // https://eslint.org/docs/rules/valid-typeof
        'valid-typeof': ['error', { requireStringLiterals: true }],

        // enforce or disallow variable initializations at definition
        'init-declarations': 'off',

        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 'off',

        // disallow deletion of variables
        'no-delete-var': 'error',

        // disallow labels that share a name with a variable
        // https://eslint.org/docs/rules/no-label-var
        'no-label-var': 'error',

        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 1,

        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 'error',

        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 'error',

        // disallow use of undefined when initializing variables
        'no-undef-init': 'error',

        // disallow use of undefined variable
        // https://eslint.org/docs/rules/no-undefined
        // TODO: enable?
        'no-undefined': 'off',

        // disallow declaration of variables that are not used in the code
        // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

        // disallow use of variables before they are defined
        'no-use-before-define': 1,
    }
};