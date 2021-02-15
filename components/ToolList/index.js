import React from "react"
import * as ToolList from "./styled"
import { useStore } from "../../context"

export default function MyToolList({ tools, categories }) {
  const { selectedCategory, selectedPrice } = useStore()

  const filteredCategories = selectedCategory === "all" ? categories : categories.filter(category => category.id === selectedCategory)
  const filteredPrice = selectedPrice === "all" ? tools : tools.filter(tool => tool.free === selectedPrice)

  return (
    <ToolList.MainContainer>
      {filteredCategories.map((category, i) => {
        const filteredTools = selectedPrice === "all" ? tools.filter(tool => tool.category === category.id) : tools.filter(tool => (tool.category === category.id && tool.price === selectedPrice))

        return (
          <ToolList.CategoriesContainer key={i}>
            <ToolList.CategoryTitle>{category.french}</ToolList.CategoryTitle>
            <ToolList.ItemContainer>
              {filteredTools.length > 0 ? filteredTools.map((tool, i) => (
                <ToolList.Item key={i} href={tool.url}>
                  <ToolList.Image src={tool.image} />
                  <ToolList.Text>
                    <ToolList.Title>{tool.name}</ToolList.Title>
                    <ToolList.Description>{tool.french}</ToolList.Description>
                  </ToolList.Text>
                </ToolList.Item>
              )) : (
                <ToolList.ItemNotFound>
                  Il n'y a pas encore d'outils disponibles dans cette catégorie.
                </ToolList.ItemNotFound>
              )}
            </ToolList.ItemContainer>
          </ToolList.CategoriesContainer>
        )
      })}
    </ToolList.MainContainer>
  )
}
