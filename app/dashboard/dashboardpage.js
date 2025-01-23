'use client'

import { useState } from 'react'
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

// Sample data
const activityData = [
  { day: 'Sunday', activities: 9 },
  { day: 'Monday', activities: 18 },
  { day: 'Tuesday', activities: 25 },
  { day: 'Wednesday', activities: 19 },
  { day: 'Thursday', activities: 28 },
  { day: 'Friday', activities: 20 },
  { day: 'Saturday', activities: 11 },
]

const incomeExpenseData = [
  { month: 'Jan', income: 15000, expenses: 12000 },
  { month: 'Feb', income: 18000, expenses: 14000 },
  { month: 'Mar', income: 16000, expenses: 17000 },
  { month: 'Apr', income: 14000, expenses: 12000 },
  { month: 'May', income: 19000, expenses: 15000 },
  { month: 'Jun', income: 17000, expenses: 16000 },
  { month: 'Jul', income: 20000, expenses: 18000 },
  { month: 'Aug', income: 21000, expenses: 16000 },
  { month: 'Sep', income: 22000, expenses: 18000 },
  { month: 'Oct', income: 23000, expenses: 17000 },
  { month: 'Nov', income: 25000, expenses: 19000 },
  { month: 'Dec', income: 28000, expenses: 21000 },
]

export default function Dashboard() {
  const [year] = useState('2023')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-500 p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <button className="md:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center space-x-2 ml-auto">
            <span className="hidden md:inline">Sam Parker</span>
            <div className="h-8 w-8 rounded-full bg-white/20"></div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Activity Statistics */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-gray-600 mb-4">Activity Statistics</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">43</div>
                <div className="text-sm text-gray-500">This month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">77</div>
                <div className="text-sm text-gray-500">Jan 2023</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">61</div>
                <div className="text-sm text-gray-500">Jan 2022</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 p-2 rounded">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Total Activities</div>
                <div className="text-xl font-bold">724</div>
              </div>
            </div>
          </div>

        {/* Expense Statistics */}
        <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Expense Statistics</h2>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-gray-500">This month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-gray-500">Jan 2023</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-gray-500">Jan 2022</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded mr-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Expenses</p>
                <p className="text-xl font-bold">$0</p>
              </div>
            </div>
          </div>

          {/* Income Statistics */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Income Statistics</h2>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold">$8</p>
                <p className="text-sm text-gray-500">This month</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">$17</p>
                <p className="text-sm text-gray-500">Jan 2023</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">$12,210</p>
                <p className="text-sm text-gray-500">Jan 2022</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500 p-2 rounded mr-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Incomes</p>
                <p className="text-xl font-bold">$217,590.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Farm Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {/* Lands */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Farm land" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Lands</div>
                <div className="text-xl font-bold">12</div>
              </div>
            </div>
          </div>

          {/* Crops */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Crops" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Crops</div>
                <div className="text-xl font-bold">37</div>
              </div>
            </div>
          </div>

          {/* Species */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Species" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Species</div>
                <div className="text-xl font-bold">14</div>
              </div>
            </div>
          </div>

          {/* Employees */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Employees" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Employees</div>
                <div className="text-xl font-bold">27</div>
                <div className="text-xs text-gray-400">(19 males, 8 females)</div>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Inputs" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Inputs</div>
                <div className="text-xl font-bold">9</div>
              </div>
            </div>
          </div>

          {/* Equipment */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Equipment" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Equipment</div>
                <div className="text-xl font-bold">53</div>
              </div>
            </div>
          </div>

          {/* Warehouses */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Warehouses" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Warehouses</div>
                <div className="text-xl font-bold">7</div>
              </div>
            </div>
          </div>

          {/* Housing */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-3">
              <img src="/placeholder.svg?height=48&width=48" alt="Housing" className="rounded-lg" />
              <div>
                <div className="text-sm text-gray-500">Total Housing</div>
                <div className="text-xl font-bold">5</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Income vs Expenses Chart */}
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">Incomes vs Expenses</h3>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded bg-green-500 text-white text-sm">{year}</button>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={incomeExpenseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="income" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.5} />
                  <Area type="monotone" dataKey="expenses" stackId="2" stroke="#f97316" fill="#f97316"fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Activities Chart */}
          <div className="bg-white rounded-lg p-4 shadow">
            <h3 className="text-gray-600 mb-4">Activities in this week</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="activities" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

