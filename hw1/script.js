const arr = [10, 555, 734, 9, 0];
console.log(Math.min(...arr));


function createCounter() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter();

counter.increment();
counter.decrement();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getValue());

let rootElement = document.querySelector('.root');
// console.log(rootElement);

function findElementByClassName(root, className) {
    if (root.classList.contains(className)) {
        return root;
    }
    for (let i = 0; i < root.children.length; i++) {
        const found = findElementByClassName(root.children[i], className);
        if (found) {
            return found;
        }
    }
    return null;

}
const targetElement = findElementByClassName(rootElement, 'my-class');
console.log(targetElement);