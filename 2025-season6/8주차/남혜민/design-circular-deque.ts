// 원형 양방향 큐 구현 - 양쪽에서  삽입/삭제 가능
class MyCircularDeque {
    private circularDeque: number[];
    private head: number;
    private tail: number;
    private capacity: number; // 큐 최대 크기 (초기 생성할 떄 고정)
    private size: number; // 현재 큐의 원소 개수

    constructor(k: number) {
        this.circularDeque = [];
        this.head = 0;
        this.tail = -1;
        this.capacity = k;
        this.size = 0;
    }

    // 앞쪽 삽입
    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    insertFront(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        if (this.size === 0) {
            this.circularDeque[this.head] = value;
        } else {
            // head를 역방향(왼쪽)으로 이동
            // capacity를 더해서 음수 막기
            this.head = (this.head - 1 + this.capacity) % this.capacity;
            this.circularDeque[this.head] = value;
        }
        this.size++;
        return true;
    }

    // 뒤쪽 삽입
    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    insertLast(value: number): boolean {
        if (this.isFull()) {
            return false;
        }
        if (this.size === 0) {
            this.circularDeque[this.tail] = value;
        } else {
            // tail을 정방향(오른쪽)으로 이동
            this.tail = (this.tail + 1) % this.capacity;
            this.circularDeque[this.tail] = value;
        }
        this.size++;
        return true;
    }

    // 앞쪽 삭제
    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    deleteFront(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        if (this.size === 1) {
            this.head = 0;
            this.tail = 0;
        } else {
            this.head = (this.head + 1) % this.capacity;
        }
        this.size--;
        return true;
    }

    // 뒤쪽 삭제
    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    deleteLast(): boolean {
        if (this.isEmpty()) {
            return false;
        }
        if (this.size === 1) {
            this.head = 0;
            this.tail = 0;
        } else {
            this.tail = (this.tail - 1 + this.capacity) % this.capacity;
        }
        this.size--;
        return true;
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    getFront(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.circularDeque[this.head];
    }

    // 시간 복잡도: O(1)
    // 공간 복잡도: O(1)
    getRear(): number {
        if (this.isEmpty()) {
            return -1;
        }
        return this.circularDeque[this.tail];
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
 * ["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
 * [[3], [1], [2], [3], [4], [], [], [], [4], []]
 * Output
 * [null, true, true, true, false, 2, true, true, true, 4]
 */

const myCircularDeque = new MyCircularDeque(3);
console.log(myCircularDeque.insertLast(1)); // true
console.log(myCircularDeque.insertLast(2)); // true
console.log(myCircularDeque.insertFront(3)); // true
console.log(myCircularDeque.insertFront(4)); // false
console.log(myCircularDeque.getRear()); // 2
console.log(myCircularDeque.isFull()); // true
console.log(myCircularDeque.deleteLast()); // true
console.log(myCircularDeque.insertFront(4)); // true
console.log(myCircularDeque.getFront()); // 4
