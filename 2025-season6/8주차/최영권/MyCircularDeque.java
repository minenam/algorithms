package LinkedList;

import java.util.Arrays;

/**
 * 시간복잡도 : O(1)
 */
public class MyCircularDeque {

    private int[] arr;
    private int size = 0;
    private int front;
    private int rear;

    public static void main(String[] args) {
        MyCircularDeque myCircularDeque = new MyCircularDeque(4);
        myCircularDeque.insertFront(9);
        myCircularDeque.deleteLast();
        System.out.println("myCircularDeque.getRear() = " + myCircularDeque.getRear());
        System.out.println("myCircularDeque.getFront() = " + myCircularDeque.getFront());

    }

    public MyCircularDeque(int k) {
        arr = new int[k];
        Arrays.fill(arr, -1);
        front = 0;
        rear = arr.length - 1;
    }

    public boolean insertFront(int value) {
        if (isFull()) {
            return false;
        }
        arr[front] = value;
        front = (front + 1) % arr.length;
        size++;
        return true;
    }

    public boolean insertLast(int value) {
        if (isFull()) {
            return false;
        }
        arr[rear] = value;
        rear = (rear + arr.length - 1) % arr.length;
        size++;
        return true;
    }

    public boolean deleteFront() {
        if (isEmpty()) {
            return false;
        }
        front = (front + arr.length -1) % arr.length;
        arr[front] = -1;
        size--;
        return true;
    }

    public boolean deleteLast() {
        if (isEmpty()) {
            return false;
        }
        rear = (rear + 1) % arr.length;
        arr[rear] = -1;
        size--;
        return true;
    }

    public int getFront() {
        return arr[(front + arr.length - 1) % arr.length];
    }

    public int getRear() {
        return arr[(rear + 1) % arr.length];
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == arr.length;
    }
}
