import { defaultRelations } from "."

/**
 * @oas [get] /variants/{variant_id}
 * operationId: GetVariantsVariant
 * summary: Retrieve a Product Variant
 * description: "Retrieves a Product Variant by id"
 * parameters:
 *   - (path) variant_id=* {string} The id of the Product Variant.
 * tags:
 *   - Product Variant
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             variant:
 *               $ref: "#/components/schemas/product_variant"
 */
export default async (req, res) => {
  const { id } = req.params

  try {
    const variantService = req.scope.resolve("productVariantService")
    let variant = await variantService.retrieve(id, {
      relations: defaultRelations,
    })

    res.json({ variant })
  } catch (error) {
    throw error
  }
}
