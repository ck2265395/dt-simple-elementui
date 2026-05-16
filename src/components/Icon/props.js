export default {
    icon: {
        type: String,
        required: true
    },
    size: {
        type: String
    },
    //旋转
    rotation:{
        type: [Number, String]
    },
    //翻转
    flip:{
        type: String
    },
    //动画
    beat: Boolean,
    'beat-fade': Boolean,
    bounce: Boolean,
    fade: Boolean,
    shake: Boolean,
    spin: Boolean,
    'spin-reverse': Boolean,
    'spin-pulse': Boolean,
    type: String,
    color: String,
}