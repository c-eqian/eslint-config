// 命名映射
export const NAMING_MAP = {
    // Hello, helloWorld
    CAMEL_CASE: '+([a-z])*([a-z0-9])*([A-Z]*([a-z0-9]))',
    // Hello, HelloWorld
    PASCAL_CASE: '+([A-Z]*([a-z0-9]))',
    // hello, hello_world
    SNAKE_CASE: '+([a-z])*([a-z0-9])*(_+([a-z0-9]))',
    // hello, hello-world
    KEBAB_CASE: '+([a-z])*([a-z0-9])*(-+([a-z0-9]))',
    // HELLO, HELLO_WORLD
    SCREAMING_SNAKE_CASE: '+([A-Z])*([A-Z0-9])*(_+([A-Z0-9]))',
    // hello, helloworld
    FLAT_CASE: '+([a-z0-9])'
};

// 组件扩展名
export const COMPONENT_EXTNAME = ['.vue', '.tsx', '.jsx'];

// 默认路径
export const DEFAULT_PATH_PATTERN = '**/*.{jsx,vue,tsx}';
