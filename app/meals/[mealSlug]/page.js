export default function mealsDetails({ params }) {
  return (
    <>
      <h1>Meals Details</h1>
      <p>Slug : {params.slug}</p>
    </>
  )
}
