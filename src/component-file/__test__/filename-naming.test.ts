import { RuleTester } from "eslint";
import filename from "../rules/filename-naming";
const ruleTester = new RuleTester();

export const testFilename = () => {
  ruleTester.run("filename-naming", filename, {
    valid: [
      {
        code: "const name = 'test';",
        filename: "src/components/login.ts",
      },
      {
        code: "const name = 'test';",
        filename: "src/components/loginLog.ts",
      },
    ],
    invalid: [
      {
        code: "const name = 'test';",
        filename: "src/components/login-log.ts",
        errors: [
          {
            message: "File 'login-log.ts' with src/components/login-log.ts should to be named 'CAMEL_CASE'",
          },
        ],
      },
      {
        code: "const name = 'test';",
        filename: "src/components/LoginLog.js",
        errors: [
          {
            message: "File 'LoginLog.js' with src/components/LoginLog.js should to be named 'CAMEL_CASE'",
          },
        ],
      },
    ],
  });
  // 携带配置-PASCAL_CASE
  ruleTester.run(
    "component-naming with options：[{ '**/components/**/*.{ts,js}': 'PASCAL_CASE' }]",
    filename,
    {
      valid: [
        {
          code: "const name = 'test';",
          filename: "src/components/Login.ts",
          options: [{ "**/components/**/*.{ts,js}": "PASCAL_CASE" }],
        },
        {
          code: "const name = 'test';",
          filename: "src/pages/loginLog.ts",
          options: [{ "**/components/**/*.{ts,js}": "PASCAL_CASE" }],
        },
      ],
      invalid: [
        {
          code: "const name = 'test';",
          filename: "src/components/login.ts",
          options: [{ "**/components/**/*.{ts,js}": "PASCAL_CASE" }],
          errors: [
            {
              message: "File 'login.ts' with src/components/login.ts should to be named 'PASCAL_CASE'",
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src/components/loginLog.ts",
          options: [{ "**/components/**/*.{ts,js}": "KEBAB_CASE" }],
          errors: [
            {
              message: "File 'loginLog.ts' with src/components/loginLog.ts should to be named 'KEBAB_CASE'",
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src\\components\\login.log.ts",
          options: [{ "**/components/**/*.{ts,js}": "PASCAL_CASE" }],
          errors: [
            {
              message: "File 'login.log.ts' with src/components/login.log.ts should to be named 'PASCAL_CASE'",
            },
          ],
        },
      ],
    },
  );
};
