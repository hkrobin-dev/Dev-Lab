type A = null;
type B = undefined;

type C = A extends null ? true : B extends undefined ? true : false;


type Rich = {
    bike : string,
    car : string,
    ship : string,
}
type chack<T> = T extends keyof Rich ? true :false;

type has = chack<"bike">