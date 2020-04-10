<template>
    <div id="add-contact">
        <!-- 联系人卡片 -->
        <van-contact-card
                :type="cardType"
                :name="currentContact.name"
                :tel="currentContact.tel"
                @click="showList = true"
        />

        <!-- 联系人列表 -->
        <van-popup v-model="showList" position="bottom">
            <van-contact-list
                    v-model="chosenContactId"
                    :list="list"
                    @add="onAdd"
                    @edit="onEdit"
                    @select="onSelect"
            />
        </van-popup>

        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" position="bottom">
            <van-contact-edit
                    :contact-info="editingContact"
                    :is-edit="isEdit"
                    @save="onSave"
                    @delete="onDelete"
            />
        </van-popup>
    </div>
</template>

<script>
    import {addContact, changeContact, delContact, getContact} from "../../../../service";
    import {mapState, mapMutations} from 'vuex';
    import {Toast} from 'vant'

    export default {
        name: "AddContact",
        data() {
            return {
                chosenContactId: null,
                editingContact: {},
                showList: false,
                showEdit: false,
                isEdit: false,
                // list: [{
                //     name: '张三',
                //     tel: '13000000000',
                //     id: 0
                // }],
                list: []
            };
        },

        computed: {
            cardType() {
                return this.chosenContactId !== null ? 'edit' : 'add';
            },

            currentContact() {
                const id = this.chosenContactId;
                return id !== null ? this.list.filter(item => item.id === id)[0] : {};
            },

            ...mapState(["userInfo"]),
        },

        mounted() {
            this.loadContact()
        },

        methods: {
            setContact(){
                // this.$emit('contact', this.)
            },
            loadContact() {
                getContact(this.userInfo.uid).then(res => {
                    // console.log(res);
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        let list = res.data;
                        for(let item of list) {
                            item.name = item.coname;
                            item.tel = item.cphone;
                            item.id = item.coid;
                        }
                        // for(let i in list) {
                        //     list[i].name = list[i].coname;
                        //     list[i].tel = list[i].cphone;
                        //     list[i].id = i
                        // }
                        this.list = list;
                        // console.log(this.list);
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                })
            },
            // 添加联系人
            onAdd() {
                console.log('保存');

                this.isEdit = false;
                this.showEdit = true;
                // that.editingContact = { id: info.id };
            },

            // 编辑联系人
            onEdit(item) {
                // console.log(item);
                this.isEdit = true;
                this.showEdit = true;
                this.editingContact = item;
            },

            // 选中联系人
            onSelect(item) {
                // console.log(item);
                this.showList = false;
                // 将当前联系人信息传给 Order 组件
                this.$emit('getcontact', item);
            },

            // 保存联系人
            onSave(info) {
                let that = this;
                that.showEdit = false;
                that.showList = false;
                // console.log(this.isEdit);
                if (that.isEdit) {
                    that.list = that.list.map(item => item.id === info.id ? info : item);
                    changeContact(info.id, info.name, info.tel).then(res => {
                        if (res.status === 200) {
                            Toast({
                                message: '操作成功！'
                            });
                            that.loadContact();
                        } else {
                            Toast({
                                message: '操作失败'
                            });
                            return
                        }
                    });
                } else {
                    console.log('info', info);
                    addContact(that.userInfo.uid, info.name, info.tel).then(res => {
                        console.log(res);
                        if (res.status === 200) {
                            if (res.data === null) {
                                res.data = []
                            }
                            let info = res.data[0];
                            info.name = info.coname;
                            info.id = info.coid;
                            info.tel = info.cphone;
                            that.infos = info;
                            // this.list.push(info);
                            Toast({
                                message: '操作成功！'
                            });
                            that.loadContact();
                        } else {
                            Toast({
                                message: '操作失败'
                            });
                            return
                        }
                    });
                    this.list.push(that.infos);
                }

                that.chosenContactId = info.id;

                // this.loadContact();
                that.$emit('getcontact', info);
                // console.log(info);
            },

            // 删除联系人
            onDelete(info) {
                this.showEdit = false;

                // if (this.chosenContactId === info.id) {
                //
                //     this.chosenContactId = null;
                //
                // }
                this.list = this.list.filter(item => item.id !== info.id);
                delContact(info.id).then(res => {
                    // console.log(res);
                    if (res.status === 200) {
                        Toast({
                            message: '操作成功！'
                        });
                        this.loadContact();
                    } else {
                        Toast({
                            message: '操作失败！'
                        });
                    }
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    #add-contact{
        box-shadow: 0 0.235rem 0.529rem #999;
    }
</style>
