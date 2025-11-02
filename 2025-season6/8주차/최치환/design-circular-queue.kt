// 전체 시간복잡도: O(1) + O(1) + O(1) + O(1) = O(1)
// 전체 공간복잡도: O(n)

class MyCircularQueue(private val k: Int) {
    private val data = IntArray(k)
    private var head = 0
    private var tail = 0
    private var size = 0

    fun enQueue(value: Int): Boolean {
        if (isFull()) {
            return false
        }

        data[tail] = value
        tail = (tail + 1) % k
        size++
        return true
    }

    fun deQueue(): Boolean {
        if (isEmpty()) {
            return false
        }

        head = (head + 1) % k
        size--
        return true
    }

    fun Front(): Int {
        if (isEmpty()) {
            return -1
        }
        
        return data[head]
    }

    fun Rear(): Int {
        if (isEmpty()) {
            return -1
        }

        return data[(tail - 1 + k) % k]
    }

    fun isEmpty(): Boolean {
        return size == 0
    }

    fun isFull(): Boolean {
        return size == k
    }
}
