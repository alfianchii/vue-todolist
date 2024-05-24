<script setup></script>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  methods: {
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
    editTodo(id) {
      this.$emit("editTodo", id);
    },
    doneTodo(id) {
      this.$emit("doneTodo", id);
    },
    todoIsDone(todo) {
      return todo.isDone ? "Done" : "Not yet";
    },
  },
};
</script>

<template>
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="inline-block min-w-full p-1.5 align-middle">
        <div class="overflow-hidden rounded-lg border shadow">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr class="divide-x divide-gray-200">
                <th
                  scope="col"
                  class="w-3/5 px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                >
                  Activity
                </th>
                <th
                  scope="col"
                  class="w-1/5 px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="w-2/5 px-6 py-3 text-start text-xs font-medium uppercase text-gray-500"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="todo in data" :key="todo.id">
                <td
                  class="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-800"
                >
                  <del v-if="todo.isDone">
                    {{ todo.activity }}
                  </del>
                  <span v-else>
                    {{ todo.activity }}
                  </span>
                </td>
                <td class="whitespace-nowrap px-6 py-4 text-sm text-gray-800">
                  {{ todoIsDone(todo) }}
                </td>
                <td
                  class="space-x-5 whitespace-nowrap px-6 py-4 text-center text-sm font-medium"
                >
                  <!-- Check -->
                  <button
                    @click="doneTodo(todo.id)"
                    type="button"
                    class="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-green-600 transition-all duration-300 hover:text-green-800 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </button>
                  <!-- Edit -->
                  <button
                    @click="editTodo(todo.id)"
                    type="button"
                    class="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-yellow-600 transition-all duration-300 hover:text-yellow-800 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                      />
                    </svg>
                  </button>
                  <!-- Remove -->
                  <button
                    @click="deleteTodo(todo.id)"
                    type="button"
                    class="inline-flex items-center gap-x-2 rounded-lg border border-transparent text-sm font-semibold text-red-600 transition-all duration-300 hover:text-red-800 disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
