/*mapped type 기반 유틸리티 타입*/


// 1. Partial<T>
// -> 특정 객체의 모든 속성을 선택적으로 만드는 유틸리티 타입

interface Post {
    title:string;
    tags :string[];
    content:string;
    thumbnailUrl?:string;
}


// 임시 저장
const draftPost:Partial<Post> = {
    title : 'TypeScript Mapped Types',
    tags : ['typescript', 'utility-types']
};

// mapped type 으로 구현한 Partial
type PartialV2<T> = {
    [key in keyof T]?:T[key]; // indexed access type
}

const draftPostV2:PartialV2<Post> = {
    title : 'TypeScript Mapped Types',
    tags : ['typescript', 'utility-types']
};

// 2. Required<T>
// -> 특정 객체의 모든 속성을 필수로 만드는 유틸리티 타입

interface UserProfile {
    username:string;
    bio?:string;
    profilePictureUrl?:string;
}

const completeProfile:Required<UserProfile> = {
    username : 'john_doe',
    bio : 'Software Developer',
    profilePictureUrl : 'http://example.com/john.jpg'
}

// mapped type 으로 구현한 Required
type RequiredV2<T> = {
    [key in keyof T]-?:T[key]; // -? : optional 제거
}

const completeProfileV2:RequiredV2<UserProfile> = {
    username : 'john_doe',
    bio : 'Software Developer',
    profilePictureUrl : 'http://example.com/john.jpg'
}


// 3. Readonly<T>
// -> 특정 객체의 모든 속성을 읽기 전용으로 만드는 유틸리티 타입

const readonlyPost:Readonly<Post> = {
    title : 'Immutable Data Structures',
    tags : ['typescript', 'readonly'],
    content : 'Content about immutable data structures.'
};

// readonlyPost.tags = ['programming']; // 오류 발생
readonlyPost.tags.push('programming');
console.log(readonlyPost);

// mapped type 으로 구현한 Readonly
type ReadonlyV2<T> = {
    readonly [key in keyof T]:T[key];
}

const readonlyPostV2:ReadonlyV2<Post> = {
    title : 'Immutable Data Structures',
    tags : ['typescript', 'readonly'],
    content : 'Content about immutable data structures.'
};
// readonlyPostV2.tags = ['programming']; // 오류 발생
readonlyPostV2.tags.push('programming');

//DeepReadonly

//type-fest나 utility-types와 같이 외부 유틸리티 타입을 쓰는 경우 가져와서 사용할 수 있음.
type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends (infer U)[] // T[P]가 배열인 경우
        ? ReadonlyArray<DeepReadonly<U>>                 // ReadonlyArray로 만들고 내부 요소 재귀 적용
        : T[P] extends object                          // T[P]가 객체인 경우
            ? DeepReadonly<T[P]>                           // 재귀적으로 DeepReadonly 적용
            : T[P];                                        // 그 외 기본 타입
};
const deepReadonlyPost:DeepReadonly<Post> = {
    title : 'Deep Immutable Structures',
    tags : ['typescript', 'deep-readonly'],
    content : 'Content about deep immutable data structures.'
};

// deepReadonlyPost.tags.push('programming'); // 오류 발생