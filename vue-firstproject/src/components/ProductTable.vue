
<script>

export default{
    props:['message'],
    
}
</script>

<template>
    <div>
    <br>
    <h1>ProductCatalog</h1>
    <h1>{{message}}</h1>
    <table>
        <tr>
            <th>ProductName</th>
            <th>ProductCost</th>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>2000</td>
        </tr>
    </table>
    
    </div>
</template>