import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <ul role="list" class="p-6 divide-y divide-slate-200">
      <li class="flex py-4 first:pt-0 last:pb-0">
        <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
        <div class="ml-3 overflow-hidden">
          <p class="text-sm font-medium text-slate-900">{person.name}</p>
          <p class="text-sm text-slate-500 truncate">{person.email}</p>
        </div>
      </li>
    </ul>
  )
}

export default App
