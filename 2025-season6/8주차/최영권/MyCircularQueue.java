package LinkedList;

import java.util.Arrays;

// https://leetcode.com/problems/design-circular-queue/

/**
 * 시간복잡도 : O(1)
 */
public class MyCircularQueue {

    // 리어와 프론트가 같으면 empty , 다른데 리어 다음이 프론트면서 리어가 가르키는 곳이 채워져 있으면 full
    private int[] queue;
    private int front = 0;
    private int rear = 0;
    private int k;
    private int size = 0; // record the queue's size

    public MyCircularQueue(int k) {
        this.k = k;
        queue = new int[k];
        Arrays.fill(queue, -1);
    }

    public boolean enQueue(int value) {
        if (isFull()) {
            return false;
        }

        if (queue[rear] == -1) {
            queue[rear] = value;
            rear = (rear + 1) % k;
        }

        size++;
        return true;
    }

    public boolean deQueue() {
        if (isEmpty()) {
            return false;
        }
        queue[front] = -1;
        front = (front + 1) % k;
        size--;
        return true;
    }

    public int Front() {
        return queue[front];
    }

    public int Rear() {
        return queue[(rear + k - 1) % k];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == k;
    }
}
