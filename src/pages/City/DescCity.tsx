import MyComponentProps from './MyComponentProps'
import { useMyContext } from "../../State/MyContext"

const DescCity: React.FC<MyComponentProps> = ({ Cityname }) => {
    const { state } = useMyContext()
    let index: number = 0
    switch (Cityname) {
        case "Moscow":
            index = 0
            break
        case "St Petersburg":
            index = 1
            break
        case "Ufa":
            index = 2
            break
        case "Kazan":
            index = 3
            break
        case "Rostov":
            index = 4
            break
        case "Yekaterinburg":
            index = 5
            break
    }

    const info = [
        ["موسكو هي عاصمة روسيا النابضة بالحياة والحيوية ، وهي مدينة تجمع بين التاريخ الغني والحداثة ، وهي موطن لبعض أشهر الجامعات في العالم. تقع موسكو في قلب روسيا ، وتقدم مشهدًا ثقافيًا متنوعًا ومتاحف عالمية وهندسة معمارية مذهلة واقتصادًا مزدهرًا", "كطالب في موسكو ، ستتمكن من الوصول إلى بعض من أفضل الفرص التعليمية في الدولة ، بما في ذلك الجامعات والمؤسسات البحثية ذات التصنيف الأعلى. المدينة هي موطن لبعض الجامعات المرموقة في روسيا ، وتقدم برامج في مجموعة واسعة من المجالات ، من الهندسة والطب إلى الفنون والعلوم الإنسانية", "في وقت فراغك ، يمكنك استكشاف العديد من مناطق الجذب في المدينة ، مثل الساحة الحمراء الشهيرة ، أو مسرح البولشوي ، أو معرض تريتياكوف ، الذي يضم بعضًا من أهم مجموعات الفن الروسي في العالم. تشتهر المدينة أيضًا بالحياة الليلية ، حيث يوجد عدد لا يحصى من الحانات والنوادي والمطاعم التي تلبي جميع الأذواق", "يمكن أن تكون الحياة في موسكو تجربة لا تُنسى ، بمزيجها الفريد من سحر العالم القديم والطاقة الحديثة. سواء كنت تبحث عن أسلوب حياة عالمي أو تعليم ممتاز أو مجرد مغامرة ، فإن موسكو هي الوجهة المثالية للطلاب من جميع أنحاء العالم"],
        ['سانت بطرسبرغ مدينة مذهلة ونابضة بالحياة ، تقع في قلب المنطقة الشمالية الغربية لروسيا. غالبًا ما يطلق عليها "باريس الشرق" ، تفتخر هذه الوجهة الساحرة بتاريخ غني ومتاحف رائعة وجامعات عالمية المستوى ، مما يجعلها مكانًا مثاليًا للدراسة للطلاب الدوليين الباحثين عن تجربة لا تُنسى' ,"كطالب في سانت بطرسبرغ ، ستتمتع بإمكانية الوصول إلى تجربة تعليمية لا مثيل لها ، مع بعض الجامعات والمؤسسات البحثية المرموقة في روسيا. تقدم المدينة مجموعة متنوعة من البرامج الأكاديمية في مختلف المجالات ، بما في ذلك العلوم والتكنولوجيا والعلوم الإنسانية والفنون","في وقت فراغك ، يمكنك استكشاف العديد من مناطق الجذب الشهيرة في المدينة ، مثل متحف الأرميتاج الأسطوري ، وقصر كاترين الخلاب ، وكاتدرائية القديس إسحاق المذهلة. تعد سانت بطرسبرغ أيضًا منطقة مكة الثقافية ، حيث تضم عددًا لا يحصى من المسارح والمعارض وأماكن الموسيقى ، حيث تعرض أفضل الفنون والترفيه الروسية والعالمية","تعد الحياة في سانت بطرسبرغ مغامرة بحد ذاتها ، بمزيجها الانتقائي من المعالم التاريخية والمحلات الأنيقة والمقاهي العصرية. سوف تنغمس في ثقافة فريدة ونابضة بالحياة ، مع مجتمع محلي مرحّب يتوق إلى مشاركة لغته وعاداته معك", "إذا كنت تبحث عن تجربة دراسة بالخارج ثرية وتغير حياتك ، فإن سانت بطرسبرغ هي الوجهة النهائية. فلماذا تنتظر؟ ابدأ رحلتك الأكاديمية في هذه المدينة الرائعة اليوم"],
        ["مرحبًا بكم في أوفا ، المدينة النابضة بالحياة والحيوية في قلب روسيا! بصفتها عاصمة جمهورية باشكورتوستان ، تعد أوفا مركزًا للتعليم والثقافة والابتكار. يبلغ عدد سكان أوفا أكثر من مليون شخص ، وتوفر بيئة حضرية صاخبة مع جميع وسائل الراحة والفرص التي تحتاجها لتزدهر كطالب","أوفا هي موطن للعديد من الجامعات المرموقة ، بما في ذلك جامعة ولاية بشكير ، وجامعة بشكير الطبية الحكومية ، وجامعة أوفا الحكومية التقنية للطيران. تقدم هذه المؤسسات مجموعة واسعة من البرامج في مجالات مثل الهندسة والطب والأعمال والعلوم الإنسانية ، وكلها تدرس من قبل أساتذة وباحثين ذوي خبرة","إلى جانب جامعاتها الممتازة ، تتمتع أوفا بمشهد ثقافي غني ، مع المتاحف والمسارح والمعارض التي تعرض التاريخ والفن الفريد للمنطقة. تشتهر المدينة أيضًا بمتنزهاتها الجميلة ومناظرها الطبيعية ، مثل جبال الأورال ونهر بيلايا" ,"بصفتك طالبًا في أوفا ، ستتاح لك الفرصة للانغماس في اللغة والثقافة الروسية ، ولإقامة اتصالات مدى الحياة مع زملائك في الفصل من جميع أنحاء العالم. فلماذا لا تختار Ufa لمغامرتك الدراسية بالخارج؟ تعال وانضم إلينا واكتشف كل ما تقدمه هذه المدينة المثيرة"],
        ["كازان هي مدينة رائعة وحيوية تقع في قلب منطقة تتارستان الروسية ، وتتميز بتراث ثقافي إسلامي غني يجعلها وجهة مثالية للطلاب العرب الذين يبحثون عن تجربة فريدة للدراسة في الخارج","كطالب في كازان ، ستتمتع بإمكانية الوصول إلى البرامج الأكاديمية الاستثنائية التي تلبي احتياجات الطلاب العرب ، بما في ذلك الدراسات الإسلامية والتاريخ والثقافة. المدينة هي موطن لبعض الجامعات والمؤسسات البحثية ذات التصنيف الأعلى في روسيا ، مما يتيح للطلاب فرصة التعلم من الخبراء المشهورين عالميًا في مجالاتهم","بالإضافة إلى التميز الأكاديمي ، تفتخر كازان بثروة من الخبرات الثقافية الإسلامية ، بما في ذلك المساجد المذهلة والعمارة الإسلامية والمراكز الثقافية. يُعد كرملين كازان الأيقوني من المعالم السياحية التي يجب زيارتها ، حيث يمكنك الاستمتاع بمشاهدة مسجد Qolsharif الرائع ، أكبر مسجد في روسيا ، والانغماس في التاريخ الغني لشعب التتار","تعتبر الحياة في كازان تجربة غنية لا تُنسى ، حيث ستتاح لك الفرصة للتعرف على الثقافة والتقاليد والمأكولات الإسلامية. تفتخر المدينة بمجتمع محلي نابض بالحياة ومرحب ، حريص على مشاركة عاداتهم وطريقة حياتهم مع الطلاب الدوليين","بصفتك طالبًا عربيًا ، ستجد أن كازان بيئة داعمة ومرحبة ، مع العديد من الفرص للتواصل مع الطلاب الآخرين الناطقين باللغة العربية وممارسة مهاراتك اللغوية. سيكون لديك أيضًا إمكانية الوصول إلى مجموعة من الأنشطة ، بما في ذلك الرياضة والموسيقى والأحداث الثقافية ، التي تلبي اهتماماتك وشغفك","إذا كنت تبحث عن تجربة دراسة بالخارج ثرية وتغير حياتك ، فإن كازان هي الوجهة النهائية للطلاب العرب. مع برامجها الأكاديمية الاستثنائية ، والتراث الثقافي الإسلامي الغني ، والمجتمع الترحيبي ، فهي المكان المثالي لبدء رحلتك الأكاديمية في روسيا. فلماذا تنتظر؟ اختر كازان اليوم واكتشف كل ما تقدمه هذه المدينة الرائعة"],
        ["مرحبًا بكم في روستوف ، المدينة النابضة بالحياة والصاخبة الواقعة في قلب جنوب روسيا! باعتبارها واحدة من أكبر المدن وأكثرها حيوية في البلاد ، تقدم روستوف تجربة طلابية لا مثيل لها تجمع بين التميز الأكاديمي والانغماس الثقافي","تعد روستوف موطنًا للعديد من الجامعات والمؤسسات البحثية ذات التصنيف العالي ، وهي مركز للتعليم والابتكار. سواء كنت مهتمًا بالعلوم أو التكنولوجيا أو الأعمال أو الفنون ، ستجد برنامجًا يناسب اهتماماتك وأهدافك","إلى جانب عروضها الأكاديمية ، تعتبر روستوف مدينة مليئة بالحياة والطاقة. من شوارعها التاريخية الساحرة ومتنزهاتها الجميلة ، إلى مراكز التسوق الحديثة والحياة الليلية الصاخبة ، هناك دائمًا ما يمكن رؤيته والقيام به في روستوف. ومع تراث ثقافي غني يتضمن الموسيقى التقليدية والرقص والمأكولات ، ستتاح لك الفرصة لتغمر نفسك في الثقافة الروسية كما لم يحدث من قبل","فلماذا تنتظر؟ انضم إلى آلاف الطلاب من جميع أنحاء العالم الذين اختاروا جعل روستوف وطنهم بعيدًا عن وطنهم. اكتشف عالمًا جديدًا من الفرص والتجارب في هذه المدينة النابضة بالحياة والمثيرة"],
        ["مرحبًا بكم في يكاترينبورغ ، إحدى أكثر مدن روسيا حيوية وإثارة! تقع ايكاترينبرج على سفوح جبال الأورال ، وهي مركز ثقافي وتعليمي وصناعي مزدهر مع تاريخ غني ومستقبل واعد","باعتبارها رابع أكبر مدينة في روسيا ، تفتخر يكاترينبورغ بتنوع سكانها وثقافاتها ، مما يجعلها وجهة مثالية للطلاب من جميع أنحاء العالم. مع وسط المدينة الصاخب ، والهندسة المعمارية المذهلة ، والعديد من المتنزهات والمساحات الخضراء ، تقدم يكاترينبورغ مزيجًا فريدًا من الطاقة الحضرية والجمال الطبيعي","تعد المدينة أيضًا موطنًا للعديد من الجامعات والمعاهد البحثية ذات المستوى العالمي ، مما يوفر للطلاب إمكانية الوصول إلى المرافق المتطورة والأساتذة المتميزين. سواء كنت مهتمًا بالهندسة أو الطب أو الأعمال أو الفنون ، فإن يكاترينبرج لديها برنامج يناسب احتياجاتك","بالإضافة إلى عروضها الأكاديمية ، تشتهر يكاترينبورغ أيضًا بمشهدها الثقافي الغني ، بما في ذلك المتاحف والمسارح والمعارض وأماكن الموسيقى. مع مشهد مزدهر للطعام والشراب ، والعديد من المهرجانات والفعاليات على مدار العام ، وسهولة الوصول إلى الأنشطة في الهواء الطلق مثل التزلج والمشي لمسافات طويلة والتخييم ، فإن يكاترينبرج لديها ما يناسب الجميع","لذلك إذا كنت تبحث عن تجربة دراسة لا تُنسى في الخارج ، فلا تبحث عن ايكاترينبرج. تعال واستكشف كل ما تقدمه هذه المدينة الرائعة"]
    ]

    const infoHtml: Array<JSX.Element> = info[index].map((Par) => {
        return (
            <p  className={'font-Cairo ' + state.fontColor}>{Par}</p>
        )
    })

    return (
        <div >
            <div className='w-full mt-6 flex justify-center '>
                <div className={'w-full max-w-6xl rounded-2xl shadow-lg mx-2 text-right flex flex-col gap-4 p-8 text-sm md:text-base ' + state.bgColor + state.shadowColor}>
                    {infoHtml}
                </div>
            </div>
        </div>
    );
}

export default DescCity