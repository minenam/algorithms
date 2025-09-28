import { ListNode, printList } from './list-node';

// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.
// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// 홀수 인덱스와 짝수 인덱스 노드를 분리하여 재배열
// 전체 시간 복잡도: O(n/2) => O(n)
// - n은 연결리스트의 노드 개수
// - 각 노드를 정확히 한 번씩만 방문하여 홀수/짝수 체인에 연결
// 공간 복잡도: O(1) - 기존 노드들의 연결만 변경하고 추가 공간 사용 안함
function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let odd: ListNode = head; // 1번 노드 (홀수)
    let even: ListNode | null = head.next; // 2번 노드 (짝수)
    let evenHead: ListNode | null = even; // 짝수 체인 시작점 저장

    // 홀수/짝수 분리 - O(n/2) ≈ O(n)
    // even.next가 존재할 때까지 반복 (짝수 노드의 다음 홀수 노드가 있는지 확인)
    while (even && even.next) {
        // 홀수 연결
        // 현재 홀수 노드를 다음 홀수 노드(even.next)와 연결
        odd.next = even.next;
        odd = odd.next; // 홀수 포인터를 새로 연결된 노드로 이동

        // 짝수 연결
        // 현재 짝수 노드를 다음 짝수 노드(odd.next)와 연결
        even.next = odd.next;
        even = even.next; // 짝수 포인터를 새로 연결된 노드로 이동
    }

    // 홀수 체인의 마지막을 짝수 체인의 시작과 연결
    odd.next = evenHead;

    return head; // 홀수 체인의 시작점 반환
}

// 테스트 케이스
console.log(
    printList(
        oddEvenList(
            new ListNode(
                1,
                new ListNode(
                    2,
                    new ListNode(3, new ListNode(4, new ListNode(5)))
                )
            )
        )
    )
); // [1,3,5,2,4]
