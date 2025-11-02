/**
 * @problemId 641
 * @origin LeetCode
 * @title Design Circular Deque
 * @summary 최대 크기가 k인 원형 양방향 큐(deque)를 설계하고 구현하는 문제이다.
 *          주어진 클래스는 큐의 앞과 뒤에 원소를 추가하거나 제거하고,
 *          현재 상태(비었는지, 가득 찼는지)와 양 끝의 원소를 확인할 수 있는 기능을 제공해야 한다.
 *
 * @class MyCircularDeque
 * @methods
 * - constructor(k: number): 최대 크기가 k인 데크를 초기화한다.
 * - insertFront(value: number): 맨 앞에 원소를 추가하고, 성공 여부를 반환한다.
 * - insertLast(value: number): 맨 뒤에 원소를 추가하고, 성공 여부를 반환한다.
 * - deleteFront(): 맨 앞의 원소를 제거하고, 성공 여부를 반환한다.
 * - deleteLast(): 맨 뒤의 원소를 제거하고, 성공 여부를 반환한다.
 * - getFront(): 맨 앞의 원소를 반환하며, 비어 있다면 -1을 반환한다.
 * - getRear(): 맨 뒤의 원소를 반환하며, 비어 있다면 -1을 반환한다.
 * - isEmpty(): 데크가 비어 있으면 true, 아니면 false를 반환한다.
 * - isFull(): 데크가 가득 차 있으면 true, 아니면 false를 반환한다.
 *
 * @examples
 * - 입력:
 *   ["MyCircularDeque","insertLast","insertLast","insertFront","insertFront",
 *    "getRear","isFull","deleteLast","insertFront","getFront"]
 *   [[3],[1],[2],[3],[4],[],[],[],[4],[]]
 * - 출력:
 *   [null,true,true,true,false,2,true,true,true,4]
 *
 * @constraints
 * - 1 ≤ k ≤ 1000
 * - 모든 입력 연산은 유효한 순서로 주어진다.
 *
 * Big-O 분석
 * 평균적인 경우 시간 복잡도: O(1)
 * 최악의 경우 시간 복잡도: O(1)
 * 공간 복잡도: O(k) (고정된 크기 배열 하나만 사용)
 *
 */
export class MyCircularDeque {
  private size: number; // 최대 크기
  private data: number[]; // 데이터를 담을 배열
  private front: number; // 앞 인덱스
  private rear: number; // 뒤 인덱스
  private count: number; // 현재 원소 개수

  constructor(k: number) {
    this.size = k;
    this.data = new Array(k);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    // front를 한 칸 앞으로 이동 (원형 구조니까 -1 + size)
    this.front = (this.front - 1 + this.size) % this.size;
    this.data[this.front] = value;
    this.count++;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.data[this.rear] = value;
    this.rear = (this.rear + 1) % this.size;
    this.count++;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.front = (this.front + 1) % this.size;
    this.count--;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.rear = (this.rear - 1 + this.size) % this.size;
    this.count--;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.data[this.front];
  }

  getRear(): number {
    if (this.isEmpty()) return -1;
    // rear은 항상 “다음 삽입 위치”를 가리키므로 한 칸 뒤로 돌아가야 함
    return this.data[(this.rear - 1 + this.size) % this.size];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.size;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
