// 전체 시간복잡도: O(1) + O(1) + O(n) + O(1) = O(n)
// 전체 공간복잡도: O(n)

class MyCircularDeque(private val k: Int) {
    private val data = IntArray(k)
    private var front = 0
    private var rear = 0
    private var size = 0

    fun insertFront(value: Int): Boolean {
        if (isFull()) return false
        front = (front - 1 + k) % k
        data[front] = value
        size++
        return true
    }

    fun insertLast(value: Int): Boolean {
        if (isFull()) return false
        data[rear] = value
        rear = (rear + 1) % k
        size++
        return true
    }

    fun deleteFront(): Boolean {
        if (isEmpty()) return false
        front = (front + 1) % k
        size--
        return true
    }

    fun deleteLast(): Boolean {
        if (isEmpty()) return false
        rear = (rear - 1 + k) % k
        size--
        return true
    }

    fun getFront(): Int {
        if (isEmpty()) return -1
        return data[front]
    }

    fun getRear(): Int {
        if (isEmpty()) return -1
        return data[(rear - 1 + k) % k]
    }

    fun isEmpty(): Boolean {
        return size == 0
    }

    fun isFull(): Boolean {
        return size == k
    }
}
