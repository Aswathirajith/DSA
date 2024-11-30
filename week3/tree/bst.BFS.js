class node{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor()
    {
        this.root=null;
    }
    isEmpty()
    {
        return this.root==null;
    }
    insert(value)
    {
    const newnode=new node(value);
    if(this.root==null)
    {
        this.root=newnode;
    }
    else{
        this.insertnode(this.root,newnode);
    }
    }
    
    insertnode(root,node)
    {
        if(node.value<root.value)
        {
            if(root.left==null)
            {
                root.left=node;
            }else{
                this.insertnode(root.left,node);
            }
        }else{
            if(root.right==null)
            {
                root.right=node;
            }else{
                this.insertnode(root.right,node);
            }
        }
    }
    
    search(root,value)
    {
        if(!root)
        {
            return false;
        }else{
            if(root.value==value){
                return true;
            }else if(root.value>value)
            {
                return this.search(root.left,value);
            }else{
                return this.search(root.right,value);
            }
        }
    }
    
    preorder(root)
    {
        if(root)
        {
            console.log(root.value);
            this.preorder(root.left);
            this.preorder(root.right);
        }
    }
    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
    postorder(root)
    {
        if(root)
        {
        this.postorder(root.left);
        this.postorder(root.right);
        console.log(root.value);
        }
    }
    
    BFS(root)
    {
        let queue=[];
        queue.push(this.root);
        while(queue.length)
        {
            let cur=queue.shift();
            console.log(cur.value);
            if(cur.left)
            {
                queue.push(cur.left);
            }
            if(cur.right)
            {
                queue.push(cur.right);
            }
        }
    }
}

const bst=new BST();
bst.insert(10);
bst.insert(5);
bst.insert(3);
bst.insert(15);
bst.insert(7);
console.log("tree is empty?:",bst.isEmpty());
console.log(bst.search(bst.root,10))
bst.BFS();