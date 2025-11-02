// fifo 원형 큐 구현
class MyCircularQueue {
    private circularQueue: number[];
    private head: number;
    private tail: number;
    private capacity: number; // 원형 큐 최대 크기
    private size: number; // 실제 큐에 있는 원소 개수

    constructor(k: number) {
        this.circularQueue = new Array(k);
        this.head = 0;
        this.tail = -1;
        this.capacity = k;
        this.size = 0;
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        this.tail = (this.tail + 1) % this.capacity;
        this.circularQueue[this.tail] = value;
        this.size++;
        return true;
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        this.head = (this.head + 1) % this.capacity;
        this.size--;
        return true;
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    Front(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.circularQueue[this.head];
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.circularQueue[this.tail];
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    isEmpty(): boolean {
        return this.size === 0;
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    isFull(): boolean {
        return this.size === this.capacity;
    }
}

/**
 * Input
 * ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "enQueue", "Rear"]
 * [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * OutputOutput
 * [null, true, true, true, false, 3, true, true, true, 4]
 */

const myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // true
console.log(myCircularQueue.enQueue(2)); // true
console.log(myCircularQueue.enQueue(3)); // true
console.log(myCircularQueue.enQueue(4)); // false
console.log(myCircularQueue.Rear()); // 3
console.log(myCircularQueue.isFull()); // true
console.log(myCircularQueue.deQueue()); // true
console.log(myCircularQueue.enQueue(4)); // true
console.log(myCircularQueue.Rear()); // 4
