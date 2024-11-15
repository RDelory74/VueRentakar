<template>
  <div class="user-table-container">
    <h1 class="table-title">Users</h1>
    <div class="search-container">
      <input
          v-model="searchTerm"
          type="text"
          placeholder="Search users..."
          class="search-input"
      />
      <span class="search-icon">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <div class="table-container">
      <div class="table-wrapper">
        <table>
          <thead>
          <tr>
            <th v-for="column in columns" :key="column.key" @click="sortBy(column.key)" class="sortable-header">
              {{ column.label }}
              <span v-if="sortKey === column.key" class="sort-indicator">
                  {{ sortOrder === 'asc' ? '▲' : '▼' }}
                </span>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in paginatedUsers" :key="user.id" @click="openUserModal(user)" class="user-row">
            <td v-for="column in columns" :key="column.key">
              {{ user[column.key] }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="pagination-container">
      <div class="pagination-info">
        Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ filteredUsers.length }} users
      </div>
      <div class="pagination-buttons">
        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-button">
          Previous
        </button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="pagination-button">
          Next
        </button>
      </div>
    </div>

    <!-- User Modal -->
    <div v-if="selectedUser" class="modal-overlay" @click="closeUserModal">
      <div class="modal-content" @click.stop>
        <h2>User Details</h2>
        <div v-for="(value, key) in selectedUser" :key="key" class="user-detail">
          <strong>{{ key }}:</strong> {{ value }}
        </div>
        <div class="modal-actions">
          <button @click="editUser" class="edit-button">Modify</button>
          <button @click="deleteUser" class="delete-button">Delete</button>
        </div>
        <button @click="closeUserModal" class="close-button">&times;</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { UserService } from '@/services/UserService'

export default {
  setup() {
    const users = ref([])
    const searchTerm = ref('')
    const sortKey = ref('id')
    const sortOrder = ref('asc')
    const currentPage = ref(1)
    const usersPerPage = 10
    const selectedUser = ref(null)

    const columns = [
      {key: 'id', label: 'User N°'},
      {key: 'firstname', label: 'Firstname'},
      {key: 'username', label: 'Last Name'},
      {key: 'phone', label: 'Tel'},
      {key: 'licenceid', label: 'Licence N°'},
      {key: 'dateOfBirth', label: 'Date of Birth'},
      {key: 'address', label: 'Address'},
      {key: 'postCode', label: 'CP'},
      {key: 'email', label: 'Email'},
      {key: 'role', label: 'Role'}
    ]

    onMounted(async () => {
      try {
        const response = await UserService.getAllUsers()
        users.value = response.data
      } catch (error) {
        console.error("Error fetching users:", error)
      }
    })

    const sortBy = (key) => {
      if (sortKey.value === key) {
        sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
      } else {
        sortKey.value = key
        sortOrder.value = 'asc'
      }
    }

    const filteredUsers = computed(() => {
      return users.value.filter(user =>
          Object.values(user).some(value =>
              value.toString().toLowerCase().includes(searchTerm.value.toLowerCase())
          )
      )
    })

    const sortedUsers = computed(() => {
      return [...filteredUsers.value].sort((a, b) => {
        let modifier = sortOrder.value === 'asc' ? 1 : -1
        if (a[sortKey.value] < b[sortKey.value]) return -1 * modifier
        if (a[sortKey.value] > b[sortKey.value]) return 1 * modifier
        return 0
      })
    })

    const totalPages = computed(() => Math.ceil(sortedUsers.value.length / usersPerPage))

    const paginatedUsers = computed(() => {
      const start = (currentPage.value - 1) * usersPerPage
      const end = start + usersPerPage
      return sortedUsers.value.slice(start, end)
    })

    const startIndex = computed(() => (currentPage.value - 1) * usersPerPage)
    const endIndex = computed(() => Math.min(startIndex.value + usersPerPage, filteredUsers.value.length))

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--
    }

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++
    }

    const openUserModal = (user) => {
      selectedUser.value = user
    }

    const closeUserModal = () => {
      selectedUser.value = null
    }

    const editUser = () => {
      // Implement edit user logic here
      console.log('Edit user:', selectedUser.value)
      // You would typically open a form or navigate to an edit page
    }

    const deleteUser = () => {
      // Implement delete user logic here
      console.log('Delete user:', selectedUser.value)
      // You would typically show a confirmation dialog before deleting
      if (confirm(`Are you sure you want to delete user ${selectedUser.value.firstname} ${selectedUser.value.username}?`)) {
        // Perform delete operation
        // After successful delete:
        users.value = users.value.filter(u => u.id !== selectedUser.value.id)
        closeUserModal()
      }
    }

    return {
      users,
      columns,
      searchTerm,
      sortKey,
      sortOrder,
      currentPage,
      paginatedUsers,
      filteredUsers,
      totalPages,
      startIndex,
      endIndex,
      selectedUser,
      sortBy,
      prevPage,
      nextPage,
      openUserModal,
      closeUserModal,
      editUser,
      deleteUser
    }
  }
}
</script>

<style scoped>
.user-table-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.table-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.search-container {
  position: relative;
  margin-bottom: 20px;
  max-width: 100%;
}

.search-input {
  width: 100%;
  padding: 10px 10px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
}

.table-container {
  width: 100%;
  overflow-x: auto;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
}

th {
  background-color: #f3f4f6;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.sortable-header {
  cursor: pointer;
}

.sort-indicator {
  margin-left: 5px;
}

.user-row {
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 4px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
  cursor: pointer;
}

.user-row:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
}

td {
  padding: 12px;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.pagination-info {
  font-size: 14px;
  color: #666;
}

.pagination-buttons {
  display: flex;
  gap: 10px;
}

.pagination-button {
  padding: 8px 16px;
  background-color: #1b2025;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.modal-content h2 {
  margin-top: 0;
  margin-bottom: 20px;
}

.user-detail {
  margin-bottom: 10px;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.edit-button, .delete-button {
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.edit-button {
  background-color: #4CAF50;
  color: white;
}

.delete-button {
  background-color: #f44336;
  color: white;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>