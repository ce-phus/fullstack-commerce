import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
    className={`bg-secondary rounded-lg min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}>
      <Text className={`text-primary font-psemibold text-lg px-1.5 ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton