/**
 * ComplexityCorner - A Collection of Functions Demonstrating Time and Space Complexity
 *
 * This file contains examples of different complexity classes to help understand
 * Big O notation and algorithm efficiency.
 */

// ============================================================================
// TIME COMPLEXITY EXAMPLES
// ============================================================================

// ----------------------------------------------------------------------------
// O(1) - Constant Time
// ----------------------------------------------------------------------------

/**
 * Access an element by index - always takes the same time regardless of array size
 * Time: O(1), Space: O(1)
 */
export function getElementAtIndex<T>(arr: T[], index: number): T | undefined {
  return arr[index];
}

/**
 * Check if a number is even - single operation
 * Time: O(1), Space: O(1)
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Get first and last element - fixed number of operations
 * Time: O(1), Space: O(1)
 */
export function getFirstAndLast<T>(arr: T[]): [T | undefined, T | undefined] {
  return [arr[0], arr[arr.length - 1]];
}

// ----------------------------------------------------------------------------
// O(log n) - Logarithmic Time
// ----------------------------------------------------------------------------

/**
 * Binary search on a sorted array - divides search space in half each iteration
 * Time: O(log n), Space: O(1)
 */
export function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Not found
}

/**
 * Calculate power using exponentiation by squaring
 * Time: O(log n), Space: O(log n) due to recursion stack
 */
export function fastPower(base: number, exponent: number): number {
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  if (exponent % 2 === 0) {
    const half = fastPower(base, exponent / 2);
    return half * half;
  } else {
    return base * fastPower(base, exponent - 1);
  }
}

// ----------------------------------------------------------------------------
// O(n) - Linear Time
// ----------------------------------------------------------------------------

/**
 * Find maximum element - must check every element once
 * Time: O(n), Space: O(1)
 */
export function findMax(arr: number[]): number | undefined {
  if (arr.length === 0) return undefined;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Calculate sum of all elements
 * Time: O(n), Space: O(1)
 */
export function sumArray(arr: number[]): number {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}

/**
 * Linear search - may need to check every element
 * Time: O(n), Space: O(1)
 */
export function linearSearch<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

/**
 * Reverse an array in place
 * Time: O(n), Space: O(1)
 */
export function reverseArray<T>(arr: T[]): T[] {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

// ----------------------------------------------------------------------------
// O(n log n) - Linearithmic Time
// ----------------------------------------------------------------------------

/**
 * Merge Sort - efficient divide and conquer sorting algorithm
 * Time: O(n log n), Space: O(n) for temporary arrays
 */
export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

/**
 * Quick Sort - another efficient sorting algorithm
 * Time: O(n log n) average, O(n²) worst case, Space: O(log n) for recursion
 */
export function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const middle = arr.filter((x) => x === pivot);
  const right = arr.filter((x) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// ----------------------------------------------------------------------------
// O(n²) - Quadratic Time
// ----------------------------------------------------------------------------

/**
 * Bubble Sort - simple but inefficient sorting
 * Time: O(n²), Space: O(1)
 */
export function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  const result = [...arr];

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

/**
 * Find all pairs in array - nested loop over all elements
 * Time: O(n²), Space: O(n²) for result storage
 */
export function findAllPairs<T>(arr: T[]): [T, T][] {
  const pairs: [T, T][] = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}

/**
 * Check for duplicates using nested loops (naive approach)
 * Time: O(n²), Space: O(1)
 */
export function hasDuplicatesNaive<T>(arr: T[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Check for duplicates using a Set (efficient approach)
 * Time: O(n), Space: O(n)
 * This demonstrates how additional space can reduce time complexity!
 */
export function hasDuplicatesEfficient<T>(arr: T[]): boolean {
  const seen = new Set<T>();

  for (const item of arr) {
    if (seen.has(item)) {
      return true;
    }
    seen.add(item);
  }

  return false;
}

// ----------------------------------------------------------------------------
// O(n³) - Cubic Time
// ----------------------------------------------------------------------------

/**
 * Find all triplets with zero sum - three nested loops
 * Time: O(n³), Space: O(1) excluding output
 */
export function findZeroSumTriplets(arr: number[]): number[][] {
  const triplets: number[][] = [];
  const n = arr.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          triplets.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return triplets;
}

// ----------------------------------------------------------------------------
// O(2^n) - Exponential Time
// ----------------------------------------------------------------------------

/**
 * Calculate Fibonacci recursively (naive approach) - creates branching tree of calls
 * Time: O(2^n), Space: O(n) for recursion stack
 * WARNING: Very slow for n > 40!
 */
export function fibonacciRecursive(n: number): number {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * Calculate Fibonacci with memoization - much more efficient!
 * Time: O(n), Space: O(n)
 * This shows how caching can dramatically improve exponential algorithms
 */
export function fibonacciMemoized(
  n: number,
  memo: Map<number, number> = new Map(),
): number {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n)!;

  const result =
    fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
  memo.set(n, result);
  return result;
}

/**
 * Generate all subsets of an array (power set)
 * Time: O(2^n), Space: O(2^n)
 * Each element can be included or excluded, creating 2^n possibilities
 */
export function getAllSubsets<T>(arr: T[]): T[][] {
  const result: T[][] = [[]];

  for (const item of arr) {
    const newSubsets = result.map((subset) => [...subset, item]);
    result.push(...newSubsets);
  }

  return result;
}

// ----------------------------------------------------------------------------
// O(n!) - Factorial Time
// ----------------------------------------------------------------------------

/**
 * Generate all permutations of an array
 * Time: O(n!), Space: O(n!) for storing results
 * WARNING: Extremely slow even for small inputs (10! = 3,628,800)
 */
export function getAllPermutations<T>(arr: T[]): T[][] {
  if (arr.length === 0) return [[]];
  if (arr.length === 1) return [arr];

  const result: T[][] = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPermutations = getAllPermutations(remaining);

    for (const perm of remainingPermutations) {
      result.push([current, ...perm]);
    }
  }

  return result;
}

// ============================================================================
// SPACE COMPLEXITY EXAMPLES
// ============================================================================

/**
 * Iterative sum - only uses a single variable
 * Time: O(n), Space: O(1)
 */
export function sumIterative(arr: number[]): number {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

/**
 * Recursive sum - uses call stack
 * Time: O(n), Space: O(n) due to recursion stack
 */
export function sumRecursive(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
}

/**
 * Create a 2D array - uses n² space
 * Time: O(n²), Space: O(n²)
 */
export function create2DArray(n: number): number[][] {
  const grid: number[][] = [];

  for (let i = 0; i < n; i++) {
    const row: number[] = [];
    for (let j = 0; j < n; j++) {
      row.push(i * n + j);
    }
    grid.push(row);
  }

  return grid;
}

/**
 * Build a frequency map - space depends on number of unique elements
 * Time: O(n), Space: O(k) where k is the number of unique elements
 */
export function buildFrequencyMap<T>(arr: T[]): Map<T, number> {
  const freqMap = new Map<T, number>();

  for (const item of arr) {
    freqMap.set(item, (freqMap.get(item) || 0) + 1);
  }

  return freqMap;
}

// ============================================================================
// COMPARISON FUNCTIONS - Same Problem, Different Complexities
// ============================================================================

/**
 * Find two numbers that sum to target - O(n²) approach with nested loops
 * Time: O(n²), Space: O(1)
 */
export function twoSumNaive(
  arr: number[],
  target: number,
): [number, number] | null {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

/**
 * Find two numbers that sum to target - O(n) approach with hash map
 * Time: O(n), Space: O(n)
 * Trades space for time efficiency!
 */
export function twoSumOptimized(
  arr: number[],
  target: number,
): [number, number] | null {
  const seen = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }
    seen.set(arr[i], i);
  }

  return null;
}

/**
 * Check if string is palindrome - iterative approach
 * Time: O(n), Space: O(1)
 */
export function isPalindromeIterative(str: string): boolean {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

/**
 * Check if string is palindrome - by reversing
 * Time: O(n), Space: O(n) for reversed string
 */
export function isPalindromeReverse(str: string): boolean {
  return str === str.split("").reverse().join("");
}

// ============================================================================
// TEACHING UTILITIES
// ============================================================================

/**
 * Measure execution time of a function
 */
export function measureTime<T>(fn: () => T, label: string = "Function"): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label} took ${(end - start).toFixed(4)}ms`);
  return result;
}

/**
 * Compare execution times of different implementations
 */
export function comparePerformance<T>(
  implementations: Array<{ name: string; fn: () => T }>,
): void {
  console.log("Performance Comparison:");
  console.log("=".repeat(50));

  for (const impl of implementations) {
    const start = performance.now();
    impl.fn();
    const end = performance.now();
    console.log(`${impl.name}: ${(end - start).toFixed(4)}ms`);
  }
}
