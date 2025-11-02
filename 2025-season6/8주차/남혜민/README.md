# 8주차 알고리즘 문제 풀이

## 문제 목록

### 1. Design Circular Queue

-   **문제 링크**: https://leetcode.com/problems/design-circular-queue/description/
-   **난이도**: Medium
-   **주제**: Queue, Array, Design

#### 접근 방법

-   고정 크기 배열을 사용한 원형 큐 구현
-   `head`와 `tail` 포인터로 큐의 앞뒤 관리
-   모듈로 연산(`%`)을 사용하여 인덱스 순환
-   `size`로 현재 원소 개수 추적

#### 핵심 개념

-   **원형 큐(Circular Queue)**: 배열의 끝과 시작이 연결된 구조
-   **FIFO**: First In First Out - 먼저 들어간 것이 먼저 나옴
-   **capacity vs size**: 최대 크기 vs 현재 원소 개수

#### 시간 복잡도

-   모든 연산: **O(1)**
    -   enQueue, deQueue, Front, Rear, isEmpty, isFull 모두 상수 시간

#### 공간 복잡도

-   **O(k)**: k는 큐의 최대 크기

---

### 2. Design Circular Deque

-   **문제 링크**: https://leetcode.com/problems/design-circular-deque/description/
-   **난이도**: Medium
-   **주제**: Queue, Array, Design, Deque

#### 접근 방법

-   양방향 큐(Deque) - 앞뒤 양쪽에서 삽입/삭제 가능
-   `head`와 `tail` 포인터를 양방향으로 이동
-   역방향 이동 시 `(index - 1 + capacity) % capacity`로 음수 방지

#### 핵심 개념

-   **Deque(Double-Ended Queue)**: 양쪽 끝에서 삽입/삭제 가능
-   **역방향 순환**: `(index - 1 + capacity) % capacity`
    -   capacity를 더하는 이유: 음수 모듈로 연산 방지
-   **정방향 순환**: `(index + 1) % capacity`

#### 시간 복잡도

-   모든 연산: **O(1)**
    -   insertFront, insertLast, deleteFront, deleteLast, getFront, getRear, isEmpty, isFull

#### 공간 복잡도

-   **O(k)**: k는 데크의 최대 크기

---

## 학습 포인트

### 원형 자료구조의 장점

1. 고정 크기 배열로 메모리 효율적 사용
2. 모든 연산이 O(1)
3. 배열의 빈 공간 재활용 가능

### 모듈로 연산 활용

-   `(index + 1) % capacity`: 정방향 순환
-   `(index - 1 + capacity) % capacity`: 역방향 순환 (음수 방지)

### 큐 vs 데크

-   **큐**: 한쪽 끝에서만 삽입/삭제 (FIFO)
-   **데크**: 양쪽 끝에서 삽입/삭제 가능 (더 유연함)ms/design-circular-deque/description/
