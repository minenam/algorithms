# 10주차 알고리즘 문제 풀이

## 문제 목록

### 1. 더 맵게

-   **파일**: [more-spicy.ts](./more-spicy.ts)
-   **링크**: https://school.programmers.co.kr/learn/courses/30/lessons/42626?language=javascript
-   **난이도**: Level 2
-   **요약**: 모든 음식의 스코빌 지수를 K 이상으로 만들기 위한 최소 섞기 횟수
-   **핵심 아이디어**: 최소 힙으로 가장 작은 두 값을 반복적으로 섞기
-   **시간복잡도**: O(N log N) - N번의 힙 연산
-   **공간복잡도**: O(N) - 힙 저장

### 2. Design HashMap

-   **파일**: [design-hashmap.ts](./design-hashmap.ts)
-   **링크**: https://leetcode.com/problems/design-hashmap/description/
-   **난이도**: Easy
-   **요약**: 해시맵 자료구조 구현 (put, get, remove)
-   **핵심 아이디어**: 배열 기반 버킷과 체이닝으로 충돌 처리
-   **시간복잡도**: O(1) 평균, O(N) 최악 - 충돌 시
-   **공간복잡도**: O(N) - 저장된 키-값 쌍 수

## 학습 포인트

### 더 맵게

-   **최소 힙**: 가장 작은 값을 O(log N)에 추출하는 우선순위 큐
-   **섞기 공식**: 가장 작은 값 + (두 번째로 작은 값 × 2)
-   **종료 조건**: 힙의 최소값이 K 이상이거나 불가능한 경우

### Design HashMap

-   **해시 함수**: key % bucketSize로 인덱스 계산
-   **충돌 처리**: 체이닝 방식으로 같은 버킷에 리스트로 저장
-   **트레이드오프**: 버킷 크기가 클수록 충돌 감소, 메모리 증가
