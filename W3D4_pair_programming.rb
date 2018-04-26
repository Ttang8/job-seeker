def reverse_linked_list(head_node)
  current = head_node
  nextNode = nil
  prev = nil
  while current
    nextNode = current.next
    current.next = prev
    prev = current
    current = nextNode
  end
  prev
end
