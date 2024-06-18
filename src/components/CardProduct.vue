<template>
    <div class="d-flex align-items-center justify-content-between card-product">
        <div>
            <h4>{{title}}</h4>
            <p><b>Price: </b>$ {{price}}</p>
        </div>
        <img :src="thumbnail" alt="" />
    </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        title: {
        type: String,
        required: true
        },
        price: {
        price: String,
        required: true
        },
        thumbnail: {
        type: String,
        required: true
        },
    }
}
</script>

<style>
.card-product{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    border: 1px solid #d6c104;
    border-radius: 12px;
    margin-bottom: 5px;
}
</style>