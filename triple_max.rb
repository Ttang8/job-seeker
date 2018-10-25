def triple_max(array)
  t1 = Time.now
  max1 = nil
  max2 = nil
  max3 = nil
  min1 = nil
  min2 = nil

  array.each do |num|
    if max1 == nil
      max1 = num
    elsif num > max1
      max3 = max2
      max2 = max1
      max1 = num
    elsif max2 == nil
      max2 = num
    elsif num > max2
      max3 = max2
      max2 = num
    elsif max3 == nil
      max3 = num
    elsif num > max3
      max3 = num
    end

    if min1 == nil
      min1 = num
    elsif num < min1
      min2 = min1
      min1 = num
    elsif num < min2
      min2 = num
    end
  end
  t2 = Time.now
  p "triplemax"
  p t2 - t1
  return [(max1*max2*max3),(min1*min2*max1)].max
end

def triple_max2(array)
  t1 = Time.now
  arr = array.sort
  t2 = Time.now
  p "triplemax 2"
  p t2 - t1
  return [(arr[-1]*arr[-2]*arr[-3]),(arr[0]*arr[1]*arr[-1])].max
end

puts triple_max([10, 3, 5, 6, 20])
puts triple_max2([10, 3, 5, 6, 20])
