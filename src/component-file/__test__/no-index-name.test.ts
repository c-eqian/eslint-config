import { RuleTester } from "eslint";
import noIndexName from "../rules/no-index-naming";
const ruleTester = new RuleTester();

export const testNoIndexName = () => {
  ruleTester.run("no-index-naming", noIndexName, {
    valid: [
      {
        code: "const name = 'test';",
        filename: "src/components/Login.vue",
      },
      {
        code: "const name = 'test';",
        filename: "src/components/LoginLog.vue",
      },
      {
        code: "const name = 'test';",
        filename: "src/components/index-login.vue",
      },
      {
        code: "const name = 'test';",
        filename: "src/components/login-index.vue",
      },
    ],
    invalid: [
      {
        code: "const name = 'test';",
        filename: "src/components/index.vue",
        errors: [
          {
            message:
              "File 'index.vue' with src/components/index.vue is not allowed to be named 'index' or 'Index'",
          },
        ],
      },
      {
        code: "const name = 'test';",
        filename: "src/components/Index.vue",
        errors: [
          {
            message:
                "File 'Index.vue' with src/components/Index.vue is not allowed to be named 'index' or 'Index'",
          },
        ],
      },
    ],
  });
  ruleTester.run("no-index-naming with options", noIndexName, {
    valid: [
      {
        code: "const name = 'test';",
        filename: "src/components/Login.vue",
        options: ["**/components/**/*.{jsx,tsx,vue}"],
      },
      {
        code: "const name = 'test';",
        filename: "src/components/LoginLog.vue",
        options: ["**/components/**/*.{jsx,tsx,vue}"],
      },
      {
        code: "const name = 'test';",
        filename: "src/components/index.vue",
        options: ["**/packages/**/*.{jsx,tsx,vue}"],
      },
      {
        code: "const name = 'test';",
        filename: "src/packages/index.ts",
        options: [["!**/packages/**/*.{ts,js}"]],
      },
    ],
    invalid: [
      {
        code: "const name = 'test';",
        filename: "src/components/index.vue",
        options: [
          [
            "**/components/**/*.{jsx,tsx,vue}",
            "**/packages/**/*.{jsx,tsx,vue}",
          ],
        ],
        errors: [
          {
            message:
                "File 'index.vue' with src/components/index.vue is not allowed to be named 'index' or 'Index'"
          },
        ],
      },
      {
        code: "const name = 'test';",
        filename: "src/components/index.ts",
        options: [
          [
            "**/components/**/*.{jsx,tsx,vue,ts}",
            "**/packages/**/*.{jsx,tsx,vue,ts}",
          ],
        ],
        errors: [
          {
            message:
                "File 'index.ts' with src/components/index.ts is not allowed to be named 'index' or 'Index'"
          },
        ],
      },
      {
        code: "const name = 'test';",
        filename: "src/packages/index.vue",
        options: [["!**/packages/**/*.{ts,js}"]],
        errors: [
          {
            message:
                "File 'index.vue' with src/packages/index.vue is not allowed to be named 'index' or 'Index'"
          },
        ],
      },
    ],
  });
};
