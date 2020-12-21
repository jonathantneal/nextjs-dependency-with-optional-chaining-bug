import Head from 'next/head'
import someDependency from 'some-dependency'

export default function Home() {
  someDependency()

  return (
    <h1>
      NextJS Dependency with Optional Chaining Bug
    </h1>
  )
}
