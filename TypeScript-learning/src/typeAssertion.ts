let anything: any;


anything = "hasan";
const kgToGm = (input: string | number): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000;
    } else if (typeof input === "string") {
        const [value] = input.split(" ")
        return `output ${Number(value)}`
    }
}

const result1 = kgToGm(2) as number;
result1.toFixed()
console.log({result1})
const result2 = kgToGm(2) as string;
console.log({result1})
