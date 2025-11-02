/**
 * @problemId 622
 * @origin LeetCode
 * @title Design Circular Queue
 * @summary 크기가 고정된 원형 큐를 직접 구현하는 문제이다.
 *          큐의 앞과 뒤가 연결된 형태로, FIFO(먼저 들어온 값이 먼저 나가는 구조)를 따른다.
 *          지정된 크기 내에서 요소 추가, 삭제, 조회 등의 동작을 수행해야 한다.
 *
 * @class
 * - MyCircularQueue(k): 큐의 크기를 k로 초기화한다.
 * - Front(): 큐의 맨 앞 요소를 반환한다. 비어 있으면 -1을 반환한다.
 * - Rear(): 큐의 마지막 요소를 반환한다. 비어 있으면 -1을 반환한다.
 * - enQueue(value): 새로운 값을 큐에 추가한다. 성공하면 true, 실패하면 false를 반환한다.
 * - deQueue(): 맨 앞의 값을 제거한다. 성공하면 true, 실패하면 false를 반환한다.
 * - isEmpty(): 큐가 비어 있는지 여부를 반환한다.
 * - isFull(): 큐가 가득 찼는지 여부를 반환한다.
 *
 * @constraints
 * - 1 ≤ k ≤ 1000
 * - 0 ≤ value ≤ 1000
 * - enQueue, deQueue, Front, Rear, isEmpty, isFull은 최대 3000번 호출될 수 있다.
 *
 * @example
 * 입력:
 * ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","Rear","isFull","deQueue","enQueue","Rear"]
 * [[3],[1],[2],[3],[4],[],[],[],[4],[]]
 *
 * 출력:
 * [null,true,true,true,false,3,true,true,true,4]
 *
 * Big-O 분석
 * 평균적인 경우 시간 복잡도: O(1)
 * 최악의 경우 시간 복잡도: O(1)
 * 공간 복잡도: O(k) (고정된 크기 배열 하나만 사용)
 */
export class MyCircularQueue {
  private queue: number[];
  private front: number;
  private rear: number;
  private size: number;
  private capacity: number;

  constructor(k: number) {
    this.queue = new Array(k);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return true;
  }

  /**
   * 큐의 맨 앞 요소를 반환한다.
   * 큐가 비어 있으면 -1 반환.
   */
  Front(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.front];
  }

  /**
   * 큐의 맨 뒤 요소를 반환한다.
   * 큐가 비어 있으면 -1 반환.
   */
  Rear(): number {
    if (this.isEmpty()) return -1;
    const lastIndex = (this.rear - 1 + this.capacity) % this.capacity;
    return this.queue[lastIndex];
  }

  /**
   * 큐가 비어 있는지 확인한다.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 큐가 가득 찼는지 확인한다.
   */
  isFull(): boolean {
    return this.size === this.capacity;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
