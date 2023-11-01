### BASE

    {
        "$schema": "https://json.schemastore.org/tsconfig", // JSON 스키마 버전을 지정합니다.
        "display": "Default", // 이 설정 파일을 IDE 등에서 어떻게 표시할지 지정합니다.
        "compilerOptions": { // TypeScript 컴파일러 옵션을 설정합니다.
        "composite": false, // 프로젝트 컴파일을 빠르게 하기 위해 세트로 묶을지 여부를 지정합니다.
        "declaration": true, // .d.ts 파일(타입 정의 파일)을 생성할지 여부를 지정합니다.
        "declarationMap": true, // .d.ts.map 파일을 생성할지 여부를 지정합니다.
        "esModuleInterop": true, // CommonJS 모듈을 ECMAScript 모듈로 변환할지 여부를 지정합니다.
        "forceConsistentCasingInFileNames": true, // 파일 이름의 대소문자 일관성을 검사할지 여부를 지정합니다.
        "inlineSources": false, // 소스 맵을 JavaScript 파일에 인라인으로 포함할지 여부를 지정합니다.
        "isolatedModules": true, // 파일을 개별 모듈로 컴파일할지 여부를 지정합니다.
        "moduleResolution": "node", // 모듈 해결 전략을 지정합니다. 여기서는 Node.js 스타일을 사용합니다.
        "noUnusedLocals": false, // 사용되지 않는 지역 변수에 대한 경고를 표시할지 여부를 지정합니다.
        "noUnusedParameters": false, // 사용되지 않는 매개 변수에 대한 경고를 표시할지 여부를 지정합니다.
        "preserveWatchOutput": true, // 감시 모드에서 컴파일된 출력을 보존할지 여부를 지정합니다.
        "skipLibCheck": true, // .d.ts 파일 검사를 건너뛸지 여부를 지정합니다.
        "strict": true, // 엄격한 타입 검사를 활성화할지 여부를 지정합니다.
        "strictNullChecks": true // null 및 undefined 값에 대한 엄격한 타입 검사를 활성화할지 여부를 지정합니다.
    },
        "exclude": ["node_modules"] // 컴파일에서 제외할 디렉터리나 파일 목록을 지정합니다.
    }
