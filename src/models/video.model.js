import mongoose ,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema=new Schema
(
    {
          videFile:
          {
              type:String, //cloudanary url
              required:true
          },
          thumbnail:
          {
           type:String, //cloudanary url
              required:true
          },
          title:
          {
            type:String,
            required:true
          },
          duration:
          {
                type:Number, //cloudanary will send you
                required:true
          },
          views:
          {
             type:Number,
             default:0
          },
          isPublished:
          {
              type:Boolean,
              default:True
          },
          owner:
          {
              type:Schema.Types.ObjectId,

          }



    },
    {
         timestamps:true
    }
)
// what is aggregation in mongoose
videoSchema.plugin(mongooseAggregatePaginate)
export const video=mongoose.model("Video",videoSchema)
