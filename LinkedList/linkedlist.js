function Node(value)
{
    this.value = value;
    this.next = null;
}

function LinkedList()
{
    this.head = null;

    this.append = function(value)
        {
            let newNode = new Node(value);
            if(this.head == null)
            {
                this.head = newNode;
            }
            else
            {
                let current = this.head;
                while(current.next !== null)
                {
                    current = current.next;
                }
                current.next = newNode;
            }
        };

    this.popHead = function()
        {
            if(!this.head)
            {
                return null;
            }
            let popped = this.head.value;
            this.head = this.head.next;
            return popped;
        };
}

let list = new LinkedList();
list.append(98);
list.append(120);
list.append(14);

console.log(list.popHead());
    
