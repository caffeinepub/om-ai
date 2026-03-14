export function getMockResponse(input: string): string {
  const lower = input.toLowerCase();

  if (
    /^(hi|hello|hey|howdy|sup|greetings|good morning|good evening|good afternoon)/.test(
      lower,
    )
  ) {
    const g = [
      "Hello! I'm Om, your AI assistant. How can I help you today?",
      "Hey there! Ready to help you with coding, knowledge, or any questions.",
      "Hi! I'm Om. Whether it's code, concepts, or creative ideas — I'm here.",
    ];
    return g[Math.floor(Math.random() * g.length)];
  }

  if (/how are you|how do you do/.test(lower)) {
    return "I'm running optimally, thanks for asking! My neural pathways are humming. What can I help you with?";
  }

  if (/python/.test(lower)) {
    if (/reverse.*string|string.*reverse/.test(lower)) {
      return `Here's how to reverse a string in Python:

\`\`\`python
# Method 1: Using slicing (most Pythonic)
def reverse_string(s):
    return s[::-1]

# Method 2: Using reversed() + join
def reverse_string_v2(s):
    return ''.join(reversed(s))

# Example usage
text = "Hello, Om.ai!"
print(reverse_string(text))  # Output: !ia.mO ,olleH
\`\`\`

Slicing (\`s[::-1]\`) is the most idiomatic Python approach — clean, readable, and efficient.`;
    }
    if (/fibonacci|fib/.test(lower)) {
      return `Fibonacci sequence in Python:

\`\`\`python
def fib_dp(n):
    if n <= 1:
        return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Generator (memory efficient)
def fib_generator(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

print([fib_dp(i) for i in range(10)])
# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
\`\`\`

Use dynamic programming for large values to avoid stack overflow.`;
    }
    return `Here's a Python data processing example:

\`\`\`python
def process_data(items: list) -> dict:
    if not items:
        return {"error": "Empty list"}
    return {
        "count": len(items),
        "sum": sum(items),
        "average": sum(items) / len(items),
        "min": min(items),
        "max": max(items),
    }

data = [4, 7, 2, 9, 1, 5, 8, 3]
print(process_data(data))
# {'count': 8, 'sum': 39, 'average': 4.875, 'min': 1, 'max': 9}
\`\`\`

Python's expressive syntax makes it perfect for data processing and automation.`;
  }

  if (/javascript|\bjs\b|typescript|\bts\b/.test(lower)) {
    if (/array|filter|map|reduce/.test(lower)) {
      return `JavaScript array methods:

\`\`\`javascript
const products = [
  { name: 'Widget', price: 25, inStock: true },
  { name: 'Gadget', price: 60, inStock: false },
  { name: 'Doohickey', price: 15, inStock: true },
];

// filter
const affordable = products.filter(p => p.price < 50 && p.inStock);

// map
const names = products.map(p => p.name.toUpperCase());

// reduce
const total = products.filter(p => p.inStock).reduce((sum, p) => sum + p.price, 0);
// 40
\`\`\`

These functional methods are pure, composable, and avoid mutation — the foundation of modern JS.`;
    }
    return `TypeScript async example:

\`\`\`typescript
async function fetchUser(userId: string): Promise<User | null> {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return await response.json() as User;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return null;
  }
}
\`\`\`

TypeScript's type system catches errors at compile time, making code more reliable.`;
  }

  if (/react|component|\bhook\b|jsx|tsx/.test(lower)) {
    return `React component with hooks:

\`\`\`tsx
import { useState, useCallback } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
}

export function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+{step}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

**useCallback** prevents unnecessary re-renders; functional setState ensures correct updates with stale closures.`;
  }

  if (/css|html|center.*div|flexbox|grid|style/.test(lower)) {
    if (/center/.test(lower)) {
      return `Modern ways to center a div in CSS:

\`\`\`css
/* Method 1: CSS Grid (most concise) */
.container {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

/* Method 2: Flexbox */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Method 3: Absolute + transform */
.element {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
\`\`\`

**Recommendation:** Use \`display: grid; place-items: center\` — most concise modern approach.`;
    }
    return `Modern CSS layout:

\`\`\`css
.card {
  display: grid;
  gap: 1rem;
  padding: 1.5rem;
  background: hsl(220 10% 10%);
  border: 1px solid hsl(220 15% 18%);
  border-radius: 12px;
  transition: transform 0.2s ease;
}

.card:hover { transform: translateY(-2px); }

/* Responsive grid - no media queries */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
\`\`\`

CSS Grid with \`auto-fill\` + \`minmax\` is the modern standard for responsive layouts.`;
  }

  if (
    /algorithm|sort|search|binary|bubble|quick|merge|linked list|tree|graph|hash/.test(
      lower,
    )
  ) {
    return `Binary search implementation:

\`\`\`python
def binary_search(arr: list, target: int) -> int:
    """
    Search for target in sorted array.
    Time: O(log n), Space: O(1)
    """
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

numbers = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(numbers, 11))  # Output: 5
print(binary_search(numbers, 6))   # Output: -1
\`\`\`

Binary search is O(log n) — halves the search space each step, far superior to linear O(n) for large sorted data.`;
  }

  const codingKeywords =
    /\b(code|function|program|script|snippet|write a|create a|how to make|implement|build|debug|fix error|bug|loop|class|variable|object|method|api|database|sql|query)\b/.test(
      lower,
    );
  if (codingKeywords) {
    return `Here's a clean implementation pattern:

\`\`\`javascript
class DataService {
  #cache = new Map();

  async getData(key) {
    if (this.#cache.has(key)) return this.#cache.get(key);
    const data = await this.#fetchFromSource(key);
    this.#cache.set(key, data);
    return data;
  }

  async #fetchFromSource(key) {
    return { id: key, data: 'Result for ' + key, timestamp: Date.now() };
  }

  clearCache() { this.#cache.clear(); }
}

const service = new DataService();
const result = await service.getData('user-123');
\`\`\`

This pattern uses private class fields for encapsulation, caching to avoid redundant operations, and follows single responsibility principle.`;
  }

  if (
    /what is|explain|define|describe|tell me about|difference between|how does/.test(
      lower,
    )
  ) {
    if (
      /machine learning|\bml\b|\bai\b|artificial intelligence|neural network/.test(
        lower,
      )
    ) {
      return "Machine learning is a subset of AI where systems learn from data rather than following explicit rules. Neural networks, inspired by the brain, consist of layers of interconnected nodes adjusting weights during training. Modern LLMs like GPT use the Transformer architecture with attention mechanisms to understand context across long text sequences.";
    }
    return `Great question! Here's a clear breakdown:

The concept involves several interconnected ideas. At its core, it's about understanding the relationship between inputs and outputs, and how systems handle complexity.

**Key principles:**
- **Abstraction** — Hide complexity behind clean interfaces
- **Modularity** — Independent, reusable components
- **Separation of concerns** — Each part does one thing well
- **DRY** — Don't Repeat Yourself

Would you like a code example or deeper dive into any aspect?`;
  }

  const defaults = [
    `That's a thoughtful question. Here's my analysis:

Approaching this systematically, we need to consider multiple angles — immediate practical aspects, longer-term implications, and underlying principles.

**Effective approach:**
1. **Clarify the core problem** — what exactly needs solving?
2. **Explore solutions** — generate multiple options first
3. **Evaluate trade-offs** — every solution has costs and benefits
4. **Iterate** — refine based on feedback

Feel free to give more details for a more targeted response!`,
    `Excellent point! Here's my perspective:

This touches on fundamental principles that apply across many domains. Complexity often hides simple underlying patterns — once identified, solutions become much clearer.

I'd recommend starting with a minimal working approach, validating assumptions early, then scaling up. This iterative methodology reduces risk and produces better outcomes than building the "perfect" solution from scratch.

What specific context are you working in? I can tailor this further.`,
  ];
  return defaults[Math.floor(Math.random() * defaults.length)];
}
