#Django Library
from dis import dis
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, CreateAPIView
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.template import RequestContext
from django.shortcuts import render
from django.http import HttpResponse

#Django Modules
from .models import Question, Answers, Results
from .serializers import QuestionSerilalizer, AnswersSerilalizer, ResultsSerilalizer


# Create your views here.
class QuestionsList(ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerilalizer

@method_decorator(csrf_exempt, name="post")
class AnswersList(ListCreateAPIView):
    queryset = Answers.objects.all()
    serializer_class = AnswersSerilalizer

class ResultsList(ListCreateAPIView):
    queryset = Results.objects.all()
    serializer_class = ResultsSerilalizer

class ResultsAPI(APIView):
    def get(self, request, id): #had to change the id | None int thingy
        try:
            returned_result = Results.objects.get(previous_id=id)
            # returned_result = get_object_or_404(Results, previous_id=id)
            # if returned_result.exists() == False:
            #     raise Http404()
            serializer = ResultsSerilalizer(returned_result)
            return Response(serializer.data)
        except:
            user_input = Answers.objects.get(id=id)
            all_tags = getattr(user_input, "tags")
            all_inputs = getattr(user_input, "inputs")

            tags_list = all_tags.split(",")
            inputs_list = all_inputs.split(",")

            master_dict = dict(zip(tags_list, inputs_list))

            for (key, value) in master_dict.items():
                if "Positive" in key:
                    if master_dict[key] == "option1":
                        master_dict[key] = -2
                    elif master_dict[key] == "option2":
                        master_dict[key] = -1
                    elif master_dict[key] == "option3":
                        master_dict[key] = 0
                    elif master_dict[key] == "option4":
                        master_dict[key] = 1
                    elif master_dict[key] == "option5":
                        master_dict[key] = 2
                if "Negative" in key:
                    if master_dict[key] == "option1":
                        master_dict[key] = 2
                    elif master_dict[key] == "option2":
                        master_dict[key] = 1
                    elif master_dict[key] == "option3":
                        master_dict[key] = 0
                    elif master_dict[key] == "option4":
                        master_dict[key] = -1
                    elif master_dict[key] == "option5":
                        master_dict[key] = -2

            traits_list = ["Benevolence", "Collaborative", "Humility", "Adjustability", "Sympathy", "Honesty", "Achievement-Striving", "Cautiousness", "Dutifulness", "Organization", "Self-Discipline", 
            "Self-Confidence", "Active", "Assertiveness", "Joyfulness", "Risk", "Friendliness", "Sociableness", "Moody",
            "Worrisomeness", "Optimism", "Self-Consciousness", "Self-Control", "Gratitude", "Venturesome", 
            "Artistic-Orientation", "Self-Aware", "Imaginative", "Curiosity", "Obedience"]
            
            avg_list = []
            for trait in traits_list:
                search = str(trait)             
                avg = (sum([val for key, val in master_dict.items() if search in key]))/2
                avg_list.append(avg)
            avg_dict = dict(zip(traits_list, avg_list))

            h_list = ["You are selfless when it comes to giving up time to take care of other people's needs, and this is something that makes you happy.",
            "You are accepting of others and do not try to change their opinions. Rather, you are able to cooperate even with people who have differing opinions.",
            "You are not looking for attention, rather your aim is to help society as a whole.",
            "Even if your opinions differ from others, you find a way to come to an agreement.",
            "You have a kind word for people and try to see the good side in them instead of being critical.",
            "You are honest and stay true to what you say to others.",
            "Success is your fuel and you are motivated to achieve your dreams.",
            "You always prepare for the future and heavily analyze each situation in your life.",
            "You are responsible when it comes to work and it is one of your top priorities. You prefer to get things done sooner than later.",
            "You live a structured, organized life and you expect yourself to stay organized in what you do. ",
            "You are persistent in what you do and discipline yourself to get it done in a timely manner. ",
            "You are hard on yourself and push yourself to reach high standards.",
            "You like keeping yourself occupied at all times. Typically, boredom makes you weak or uncomfortable.",
            "You like to be the one making the decisions rather than the one allowing them to be made for you. When it comes to giving advice, you do not hesitate.",
            "You are entertaining and you frequently bring smiles to others around you.",
            "You like to take risks because you believe that it is always worth it to take a risk.",
            "You are extremely social and find it easy to make new relationships with others.",
            "You want to be a big part of your social groups and you value them.",
            "You have command over your emotions and don't let them take over you.",
            "You are confident that things will work out in the future, allowing you to focus on the present and make the best out of it.",
            "You are optimistic and don't complain when things don't go the way you wanted them to go.",
            "You are sensitive in terms of what others say to you and think about you.",
            "You are one who is able to control yourself and your desires. You are not influenced by any external pressures.",
            "You are grateful for what you have and don’t take things for granted.",
            "You want change in life and take risks. You enjoy the adventure that follows change.",
            "You respect art and all forms of creative expression.",
            "You are emotionally aware with yourself and can identify how you are feeling at any time.",
            "You have a creative imagination which includes both real-life as well as fantasy ideas.",
            "You are curious and always ask questions. You often engage in philosophical discussions.",
            "You want rules to be set in place and properly enforced, because that is what makes you feel safe."]

            l_list = ["You are focused on yourself and trying to make yourself better before taking on the initiative to make others better.",
            "You care deeply about small details and often spend much of your time trying to make others agree to your ideas.",
            "You feel good when you have attention, and you want to be recognized for what you have done.",
            "You are one who rarely changes their opinion and you want to convince others that your opinion is right.",
            "You have an exclusive group of people who pass your criticisms and you often find yourself being critical about another person.",
            "You find it hard to be transparent with people and often lie to them.",
            "You are satisfied with your lifestyle and do not wish for more, rather are thankful for what you have already.",
            "You prefer not to make many plans and let the spur of the moment decide your actions.",
            "You procrastinate tasks by pushing them off to later, especially if they are not your priority.",
            "You are unstructured in what you do which may result in disorganization in your life.",
            "You usually take many breaks when trying to get work done and it elongates the time it takes for you to get work done.",
            "You often worry if you are good enough to reach high standards, so you don’t push yourself to the maximum.",
            "You enjoy free time and like to keep an open schedule with less responsibilities.",
            "You prefer others in your groups to make the decisions and you feel comfortable following their choices.",
            "You don't like to be the one in the center at a party.",
            "You don’t like taking risks because you don’t want to lose what you have.",
            "Relationships are exclusive to you so it is harder for you to make new friends.",
            "You feel that you don't need social groups in your life and are better off yourself.",
            "Your emotions usually start to take over you and have a major influence on decisions you make.",
            "You are worrisome as you constantly worry about the future.",
            "You are the one who sees the glass half-empty and takes a negative view when something goes wrong.",
            "You don't care about other people's opinions and do not fear being criticized for your mistakes.",
            "External pressure from situations is easily able to manipulate you, and sometimes you don't even realize it until the situation has ended.",
            "You realize that you become grateful for things after you lose them.",
            "You don't like to try new things and prefer to stick to what you are comfortable with.",
            "You are not interested in art and creative forms of expression.",
            "You are not aware of the emotions you have inside you, making it hard for you to understand yourself at times.",
            "You have a limited imagination which focuses on the real-world.",
            "You are unconcerned with the meaning of things and don't frequently ask questions.",
            "You don't like to follow rules that limit creativity. You believe that the traditional way is not the best way."
            ]

            n_list = ["Depending on the situation, you may help another person tend to their needs, or you may help yourself first before taking the initiative to help others around you.",
            "Predicated on who you work with, sometimes you find yourself quarreling over small details, but other times you are able to adjust to other people's opinions.",
            "You want people to recognize that you have done something worthy, but at the same time you prefer not to be in the spotlight.",
            "You are one who may or may not compromise with another depending on the subject matter and the state of your opinions.",
            "You are one who gets to know a person before having something good or bad to say about them. This may lead you to empathize with them or criticize them in your head.",
            "You strive to be honest, but sometimes you lie to people if it would benefit the situation.",
            "You are one who wants to achieve great things, but often find yourself questioning if it is worth risking what you have to attempt to gain more.",
            "You like making plans but don’t over plan for anything, allowing room for anything that comes up in the spur of the moment.",
            "You are responsible when it comes to your priorities, but if something is not a priority for you, you push it off to a later date.",
            "You prefer having an organized environment, but sometimes you can be disorganized.",
            "You are persistent in what you do when it comes to doing something you enjoy, but it is hard for you to work consistently on things you do not enjoy doing.",
            "You want to reach high standards and you push yourself, but occasionally you have doubt that you may not achieve those standards.",
            "You want to have a work-life balance in which you keep yourself busy but also block out time for relaxation.",
            "You are comfortable making decisions and allowing others to make decisions. When it comes to giving advice, you give constructive criticism.",
            "You are a positive person and can be social or quiet, depending on the situation.",
            "You take risks only when they are necessary because you don’t want to lose anything valuable that you have.",
            "You don’t have trouble making friends, but you are careful about who you choose to become friends with.",
            "Social groups are part of your life, but sometimes, you prefer to be independent.",
            "You try your best to control your emotions, but in certain situations, you have trouble suppressing them.",
            "Sometimes you worry about the future and what could go wrong, but you also have the self-confidence to avoid fear.",
            "You are optimistic about what could happen in the future, but you also doubt yourself when negativity arises.",
            "In front of certain people, you fear judgment. But for most people, you are not as sensitive to their judgements about you.",
            "You are able to maintain control over your actions and words; however, under the influence of a group of certain people, you are prone to manipulation.",
            "You want to remain grateful for what you have, but find it hard to constantly be in that awareness.",
            "You are selective about any new things that you want to try.",
            "You like art and music to a certain extent. There are specific forms of art and music that you enjoy.",
            "You tend to be self-aware; but on some occasions, you may feel like you can't quite comprehend yourself.",
            "You can be imaginative when your mind is at ease. However, in most situations, you find yourself to be more practical.",
            "You are curious when it comes to topics which interest you. You like to partake in discussions regarding your interests.",
            "You feel comfortable with rules put in place, but you don’t favor rules that limit your creativity or restrict you from thinking/acting from a different angle.",
            ]

            t_list = ["While you should prioritize yourself first, it is also important to attend to the needs of others around you.",
                "When it comes to teamwork, it is important to be open to all ideas and the fact that your opinion may not always be the best one.",
                "There is a distinction between pride and ego, and while it is good to be proud of your actions, if it becomes something you start to flaunt and boast, it only fuels your ego.",
                "Sometimes adjustment is needed, and the more you can embrace it, the more productive you will be.",
                "It only hurts you to hold negative thoughts about others; sometimes, you are your worst enemy.",
                "It is hard to tell the truth at times, but if you can embrace the temporary uncomfort, it can save you from permanent guilt.",
                "Having grand ambitions never hurts; even if you don’t accomplish all of them, you’ll be a lot further down the road than if you were to think small from the start.",
                "Although the thrill of having no plans can be enjoyable, it is important to keep a balance between caution and impulse.",
                "Committing yourself to a task is important and setting small rewards for yourself can help prevent you from procrastinating tasks.",
                "Organization is the remedy to feeling overwhelmed because when everything is in the right place, you can start living a more structured lifestyle.",
                "Writing down your goals can help tone your discipline, especially if you tend to get sidetracked by distractions.",
                "Setting some goals, acknowledging your past achievements, or knowing your strengths can help improve your self-confidence; know that the only obstacles are the ones you create in your mind.",
                "Being able to connect and network properly is an imperative skill, and you need to have courage and confidence to approach others (practice by attending networking conferences and talking with people).",
                "When it comes to being assertive, you may be too reserved; remember, it is important to voice your opinion, even if others may not agree with you.",
                "Smile! You may be taking some situations too seriously; it is okay to laugh and smile! Practicing gratitude can also help you become more joyous.",
                "Risk will always be there, but greater risks usually grant greater rewards, so do what you need to do in order to reach your dreams.",
                "Friendship is one of the greatest assets anyone can have, so there is no need to be reserved when it comes to meeting new people and making new friends.",
                "It is important to have a balance between your social and independent life; sometimes you may favor one over the other, but strive for a balance between your public and private affairs.",
                "Practice relaxation to avoid mood-swings (meditation or short breathing exercises can help you deal with strong emotions).",
                "If you tend to worry too much about the future, remember that the past is a lesson, the future your motivation, and the present a gift! Live in the moment.",
                "Always try to see the positive in any situation; remind yourself that setbacks are temporary, and put effort into noticing the good things that occur in life.",
                "You are you! But sometimes, you let people and their comments easily get inside of you -- but remember that they don’t know as much about you as you do about yourself.",
                "It may be hard not to fall into peer pressure, especially if those pressuring you are close friends, however, do not make any choices you may end up regretting.",
                "Even in the chaos of everyday life, have moments when you realize the value of everything you have, because gratitude is the root of happiness.",
                "It is good to get comfortable with the uncomfortable as changes are necessary for progress.",
                "Art is a path for creativity to walk upon, so try to understand the meaning behind another person’s work of art to get true value from it.",
                "To become more self-aware, you should write down your strengths and weaknesses frequently.",
                "Practicality is important; however, having a creative imagination is just as significant because knowledge and practicality are finite, but imagination is boundless.",
                "Progress stemps from curiosity, so it is important to stay curious as this opens new paths, new doors, and new opportunities.",
                "A balance of both obedience and your own authority is beneficial as you should know when to follow the rules or change them.",
                ]

            h_dict = dict(zip(traits_list, h_list))
            l_dict = dict(zip(traits_list, l_list))
            n_dict = dict(zip(traits_list, n_list))
            t_dict = dict(zip(traits_list, t_list))

            categories = {"Benevolence": "Agreeableness", "Collaborative": "Agreeableness", "Humility": "Agreeableness", "Adjustability": "Agreeableness", "Sympathy": "Agreeableness", "Honesty": "Agreeableness", 
            "Achievement-Striving":"Conscientiousness", "Cautiousness":"Conscientiousness", "Dutifulness":"Conscientiousness", "Organization":"Conscientiousness", "Self-Discipline":"Conscientiousness", "Self-Confidence":"Conscientiousness", 
            "Active":"Extraversion", "Assertiveness":"Extraversion", "Joyfulness":"Extraversion", "Risk":"Extraversion", "Friendliness":"Extraversion", "Sociableness":"Extraversion", 
            "Moody":"Emotional Range","Worrisomeness":"Emotional Range", "Optimism":"Emotional Range", "Self-Consciousness":"Emotional Range", "Self-Control":"Emotional Range", "Gratitude":"Emotional Range", 
            "Venturesome":"Openness", "Artistic-Orientation":"Openness", "Self-Aware":"Openness", "Imaginative":"Openness", "Curiosity":"Openness", "Obedience":"Openness"}

            sentence_list = []
            strengths = []
            ambiguities = []
            tips = []

            for trait in traits_list:
                if avg_dict[trait] >= 1.0:
                    sentence = h_dict[trait]
                    sentence_list.append(sentence)
                    strengths.append(trait)
                if avg_dict[trait] <= -0.5:
                    ambiguities.append(trait)
                    tip_sentence = t_dict[trait]
                    tips.append(tip_sentence)
                if avg_dict[trait] <= -1.0:
                    sentence = l_dict[trait]
                    sentence_list.append(sentence)
                if avg_dict[trait] >= -1.0 and avg_dict[trait] <= 1.0:
                    sentence = n_dict[trait]
                    sentence_list.append(sentence)
            
            summary = " ".join(sentence_list)

            generic_tips = ["Surround yourself with supportive people who want to see you achieve your goals.", 
            "Listen as much as you can when you talk to people because observing others first is always more valuable for curating relationships.", 
            "Take time to reflect on your habits: if there are habits that aren’t helping you, eliminate them.", 
            "Asking for help is never a sign of weakness, it is a sign of courage and the willingness to learn.", 
            "Don’t be afraid to try new things or learn new skills to keep yourself engaged.", 
            "Time is your most valuable asset: use it for purposeful activities that bring positive emotions to you."]

            if len(tips) < 6:
                for trait in traits_list:
                    if avg_dict[trait] == 0:
                        tip_sentence = t_dict[trait]
                        tips.append(tip_sentence)
                if len(tips) < 6:
                    tips.append(generic_tips[0])
                    tips.append(generic_tips[1])
                    tips.append(generic_tips[2])
                    tips.append(generic_tips[3])
                    tips.append(generic_tips[4])
                    tips.append(generic_tips[5])
            tips = tips[0:6]

            if len(strengths) < 4:
                for trait in traits_list:
                    if avg_dict[trait] == .5:
                        strengths.append(trait)
                    strengths = strengths[0:4]
            if len(ambiguities) < 4:
                for trait in traits_list:
                    if avg_dict[trait] == 0:
                        ambiguities.append(trait)
                    ambiguities = ambiguities[0:4]
            
            displayed_strengths = []
            if len(strengths) > 12:
                for trait in traits_list:
                    if avg_dict[trait] >= 1.5:
                        displayed_strengths.append(trait)
                if len(displayed_strengths) > 12:
                    displayed_strengths = displayed_strengths[0:12]
            
            if displayed_strengths == []:
                displayed_strengths = strengths

            first_category = 0
            second_category = 0
            third_category = 0
            fourth_category = 0
            fifth_category = 0

            for trait in strengths:
                if categories[trait] == "Agreeableness":
                    first_category += 1
                if categories[trait] == "Conscientiousness":
                    second_category += 1
                if categories[trait] == "Extraversion":
                    third_category += 1
                if categories[trait] == "Emotional Range":
                    fourth_category += 1
                if categories[trait] == "Openness":
                    fifth_category += 1

            percent_first = (first_category/6) * 100
            percent_second = (second_category/6) * 100
            percent_third = (third_category/6) * 100
            percent_fourth = (fourth_category/6) * 100
            percent_fifth = (fifth_category/6) * 100

            interquartile_percents = " ".join([str(percent_first), str(percent_second), str(percent_third), str(percent_fourth), str(percent_fifth)])

            whole_percent_first = (first_category/len(strengths)) * 100
            whole_percent_second = (second_category/len(strengths)) * 100
            whole_percent_third = (third_category/len(strengths)) * 100
            whole_percent_fourth = (fourth_category/len(strengths)) * 100
            whole_percent_fifth = (fifth_category/len(strengths)) * 100

            whole_percents = " ".join([str(whole_percent_first), str(whole_percent_second), str(whole_percent_third), str(whole_percent_fourth), str(whole_percent_fifth)])
            strengths = " ".join(displayed_strengths)
            ambiguities = " ".join(ambiguities)
            tips = " ".join(tips)

            new_result = Results()
            # new_result.previous_id = Answers.objects.latest("id")
            new_result.previous_id = id
            new_result.whole_percents = whole_percents
            new_result.interquartile_percents = interquartile_percents
            new_result.strengths = strengths
            new_result.ambiguities = ambiguities
            new_result.summary = summary
            new_result.tips = tips
            new_result.save()

            returned_result = Results.objects.get(previous_id=id)
            serializer = ResultsSerilalizer(returned_result)

            return Response(serializer.data)

# def handler404(request, *args, **argv):
#     response = render_to_response('PageNotFound.js', {},
#     context_instance=RequestContext(request))
#     response.status_code = 404
#     return response

def error_404_view(request, exception):
    data = {"name": "ThePythonDjango.com"}
    return render(request,'myapp/PageNotFound.js', data)


# def index(request):
#     return HttpResponse("Hello, world. You're at the Home page of Django sample project error 404.")



