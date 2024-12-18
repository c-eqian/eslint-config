import { RuleTester } from "eslint";
import folderNaming from "../rules/folder-naming";
const ruleTester = new RuleTester();

export const testFolderNaming = () => {
  ruleTester.run("folder-naming", folderNaming, {
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
        filename: "src/page/adminManage",
        errors: [
          {
            message: `In the path of the file "src/page/adminManage", the name of the folder "adminManage" does not match "KEBAB_CASE"`,
          },
        ],
      },
      {
        code: "const name = 'test';",
        filename: "src/page/adminManage/index.vue",
        errors: [
          {
            message: `In the path of the file "src/page/adminManage", the name of the folder "adminManage" does not match "KEBAB_CASE"`,
          },
        ],
      },
    ],
  });
  ruleTester.run(
    "folder-naming with options: [{ 'src/pages/**': 'PASCAL_CASE' }]",
    folderNaming,
    {
      valid: [
        {
          code: "const name = 'test';",
          filename: "src/components/Login.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
        },
        {
          code: "const name = 'test';",
          filename: "src/pages/LoginLog.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
        },
        {
          code: "const name = 'test';",
          filename: "src/pages/LoginLog/index-login.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
        },
        {
          code: "const name = 'test';",
          filename: "src/__test__/components/login_log/index-login.vue",
          options: [
            {
              "src/pages/**": "PASCAL_CASE",
              "src/__test__/components/**": "SNAKE_CASE",
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src\\__test__\\components\\login_log\\index-login.vue",
          options: [
            {
              "src/pages/**": "PASCAL_CASE",
              "src/__test__/components/**": "SNAKE_CASE",
            },
          ],
        },
      ],
      invalid: [
        {
          code: "const name = 'test';",
          filename: "src/pages/admin-manage/index.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
          errors: [
            {
              message: `In the path of the file "src/pages/admin-manage", the name of the folder "admin-manage" does not match "PASCAL_CASE"`,
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src\\__test__\\components\\loginLog\\index-login.vue",
          options: [
            {
              "src/pages/**": "PASCAL_CASE",
              "src/__test__/components/**": "SNAKE_CASE",
            },
          ],
          errors: [
            {
              message: `In the path of the file "src/__test__/components/loginLog", the name of the folder "loginLog" does not match "SNAKE_CASE"`,
            },
          ],
        },
      ],
    },
  );
  ruleTester.run(
    "folder-naming with options: [{ 'ignore': ['pages/src/*'] }]",
    folderNaming,
    {
      valid: [
        {
          code: "const name = 'test';",
          filename: "src/components/table-config/button-config/Login.vue",
          options: [
            {
              "src/components/**": "PASCAL_CASE",
              ignore: ["table-config", "button-config"],
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src/pages/LoginLog.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
        },
        {
          code: "const name = 'test';",
          filename: "src/pages/LoginLog/index-login.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
        },
        {
          code: "const name = 'test';",
          filename: "src/__test__/components/login_log/index-login.vue",
          options: [
            {
              "src/pages/**": "PASCAL_CASE",
              "src/__test__/components/**": "SNAKE_CASE",
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src\\__test__\\components\\login_log\\index-login.vue",
          options: [
            {
              "src/pages/**": "PASCAL_CASE",
              "src/__test__/components/**": "SNAKE_CASE",
            },
          ],
        },
      ],
      invalid: [
        {
          code: "const name = 'test';",
          filename: "src/pages/admin-manage/index.vue",
          options: [{ "src/pages/**": "PASCAL_CASE" }],
          errors: [
            {
              message: `In the path of the file "src/pages/admin-manage", the name of the folder "admin-manage" does not match "PASCAL_CASE"`,
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src\\__test__\\components\\loginLog\\index-login.vue",
          options: [
            {
              "src/pages/**": "PASCAL_CASE",
              "src/__test__/components/**": "SNAKE_CASE",
            },
          ],
          errors: [
            {
              message: `In the path of the file "src/__test__/components/loginLog", the name of the folder "loginLog" does not match "SNAKE_CASE"`,
            },
          ],
        },
        {
          code: "const name = 'test';",
          filename: "src/components/table-config/button-config/Login.vue",
          options: [
            { "src/components/**": "PASCAL_CASE", ignore: ["table-config"] },
          ],
          errors: [
            {
              message: `In the path of the file "src/components/table-config/button-config", the name of the folder "button-config" does not match "PASCAL_CASE"`,
            },
          ],
        },
      ],
    },
  );
};
