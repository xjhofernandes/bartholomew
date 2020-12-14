<template>
<div class="mt-20">
    <table class="border-collapse w-full">
        <thead>
            <tr>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Name</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Endpoint</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Last Run</th>
                <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                    Test API
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                    https://jsonplaceholder.typicode.com/todos/2
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold text-lg ">failed</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <div class="flex flex-row items-center">
                        <svg class="h-10 pr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>                    
                        <p>Jul 27, 2011 8:35:29 AM</p>
                    </div>
                </td>                
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>                    
                    <div class="flex justify-between items-center">
                        <button class="h-10 py-1 px-2 bg-blue-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">Edit Job</button>                        
                        <button class="h-10 py-1 px-2 bg-black text-white text-center font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none">Logs</button>                                                
                        <button class="h-10 py-1 px-2 bg-red-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none">Remove Job</button>                        
                    </div>
                </td>
            </tr>
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                    Consolidação de OV's
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                    10.147.821.56/RotinasAutomaticas/ConsolidarOrdensDeVenda
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold text-lg">sucess</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <div class="flex flex-row items-center">
                        <svg class="h-10 pr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>                    
                        <p>Jan 13, 2018 5:35:29 PM</p>
                    </div>
                </td>                
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>                    
                    <div class="flex justify-between items-center">
                        <button class="h-10 py-1 px-2 bg-blue-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">Edit Job</button>                        
                        <button class="h-10 py-1 px-2 bg-black text-white text-center font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none">Logs</button>                                                
                        <button class="h-10 py-1 px-2 bg-red-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none">Remove Job</button>                        
                    </div>
                </td>
            </tr>
            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Company name</span>
                    API Fake
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Country</span>
                    fakeapi.com/v1/1
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                    <span class="rounded bg-yellow-400 py-1 px-3 text-xs font-bold text-lg">inactive</span>
                </td>
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <div class="flex flex-row items-center">
                        <svg class="h-10 pr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>                    
                        <p>Nov 07, 2020 5:56:29 AM</p>
                    </div>
                </td>                         
                <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Actions</span>                    
                    <div class="flex justify-between items-center">
                        <button class="h-10 py-1 px-2 bg-blue-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none">Edit Job</button>                        
                        <button class="h-10 py-1 px-2 bg-black text-white text-center font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none">Logs</button>                        
                        <button class="h-10 py-1 px-2 bg-red-500 text-white text-center font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none">Remove Job</button>                        
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
  name: 'TableJobs'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
