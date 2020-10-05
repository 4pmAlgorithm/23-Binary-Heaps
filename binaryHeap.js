//Max Binary Heap
//         9
//     4       6
// 1      3  5    2


//Min Binary Heap
//         1
//     2       4
// 8     3  6     9


function binaryHeap(val){
    let heap = []
    heap.push(val)     //1. push the value into the values property on the heap 

    let index = heap.length-1 //2-1. create a variable called index which is the length of the values property -1 
    let parentIdex = Math.floor((index-1)/2) //2-2 create a variable called parentIdex which is the floor of (index-1)/2

    console.log(parentIdex)

    for(let i = 0; i < index; i++){

    }


    while(heap[parentIdex] < heap[index]){
        heap[parentIdx] = temp 
        temp = heap[index]
        heap[index] = heap[parentIdex]
        index = parentIdex
    }

    // 2-3 keep looping as long as the values element at the parentIdex is less than the values element at the child index
    // 2-3-1 swap the value of the values element at the parentIdex with the value of the element property at the child index 
    // 2-3-2 set the index to be the parentIndex, and start over 

    return heap
}


binaryHeap(4)
console.log(binaryHeap(6))

// 1. push the value into the values property on the heap 
// 2. bubble up 
//     2-1. create a variable called index which is the length of the values property -1 
//     2-2 create a variable called parentIdex which is the floor of (index-1)/2
//     2-3 keep looping as long as the values element at the parentIdex is less than the values element at the child index
//         2-3-1 swap the value of the values element at the parentIdex with the value of the element property at the child index 
//         2-3-2 set the index to be the parentIndex, and start over 

