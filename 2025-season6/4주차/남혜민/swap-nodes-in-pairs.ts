import { ListNode } from './list-node';

// 연결 리스트에서 인접한 두 노드씩 교환하는 문제
// 노드의 값이 아닌 노드 자체를 교환해야 함

// 더미 노드 사용해 반복하기
// 시간 복잡도: O(n/2) => O(n)
// 공간 복잡도: O(1) - 더미 노드 1개만 생성하고 나머지는 기존 노드들만 변경
function swapPairs1(head: ListNode | null): ListNode | null {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy; // O(1) - 이전 노드 포인터

    // O(n/2) = O(n) - 두 개씩 묶어서 처리하므로 n/2번 반복
    while (prev.next && prev.next.next) {
        // 교환할 두 노드 설정
        let first = prev.next;
        let second = prev.next.next;

        // 노드 교환 수행
        prev.next = second; // 이전 노드가 두 번째 노드를 가리킴
        first.next = second.next; // 첫 번째 노드가 다음 쌍을 가리킴
        second.next = first; // 두 번째 노드가 첫 번째 노드를 가리킴

        // 다음 쌍으로 이동
        prev = first; // 이전 포인터를 교환된 첫 번째 노드로 이동
    }

    return dummy.next;
}

// 테스트 케이스
const testList = new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4)))
);

console.log(swapPairs1(testList));
