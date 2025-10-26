/*
* Pick<T, K>
-> T 객체에서 K에 해당하는 속성들만 선택하여 새로운 타입을 만드는 유틸리티 타입
* */

interface Post{
    title:string;
    tags :string[];
    content:string;
    thumbnailUrl?:string;
}

const legacyPost:Pick<Post, 'title' | 'content'> = {
    title : 'Legacy Systems in Modern Development',
    content : '옛날 콘텐츠.'
}

// mapped type 으로 구현한 Pick
type PickV2<T, K extends keyof T> = {
    [key in K]:T[key];
}


/*
* Omit<T, K>
-> T 객체에서 K에 해당하는 속성들을 제외한 나머지 속성들로 새로운 타입을 만드는 유틸리티 타입
* */

const postWithoutThumbnail:Omit<Post, 'title'> = {
    tags : ['typescript', 'utility-types'],
    content : 'Omit 유틸리티 타입에 대한 설명.',
    thumbnailUrl : 'http://example.com/thumbnail.jpg'
}

type OmitV2<T, K extends keyof T> = {
    [key in Exclude<keyof T, K>] : T[key];
}

/*
* Record<K, T>
-> K에 해당하는 키들을 가지고, 값의 타입이 T인 `객체 타입을` 만드는 유틸리티 타입
* */

type ThumbnailLegacy = {
    large : {url:string; width:number; height:number;};
    medium : {url:string; width:number; height:number;};
    small : {url:string; width:number; height:number;};
    watch : {url:string; width:number; height:number;};
}
type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', {url:string; width:number; height:number;}>;

// Keyof any : string | number | symbol
// -> 어떤 객체의 key값이야 라는 의미
type RecordV2<K extends keyof any, T> = {
    [key in K]:T;
}