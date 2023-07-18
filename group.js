class Group {


constructor(){
    this.group = [];
}

add(item){
    if (!this.group.includes(items)){
        this.group.push(item);
    }
}
delete(item){
    let index = this.group.indexOf(item);
    if (index !== -1 ){
        this.group.splice(index,-1);
    }
}

has(item){
    return this.group.includes(item);
}

static from(a){
    let g = new Group();
    for (let item of a){
        g.add(item);    
}
}
}